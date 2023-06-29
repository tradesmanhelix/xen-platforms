# frozen_string_literal: true

class Api::V1::InvoicesController < ApplicationController
  def index
    invoices = Invoice.where(borrower_id: borrower_id)
    render json: invoices
  end

  def update
    invoice = Invoice.find(params[:id])

    if state_event.present?
      begin
        invoice.public_send("#{state_event}!")
      rescue AASM::InvalidTransition
        render plain: "", status: :bad_request and return
      end
    end

    invoice.update!(invoice_params)

    render json: invoice
  end

  private

  def borrower_id
    Integer(params.require(:borrower_id))
  end

  def invoice_params
    params.require(:invoice).permit(
      :amount,
      :borrower_id,
      :due_date,
      :invoice_number,
    )
  end

  def state_event
    return @state_event if @state_event.present?

    state_param = params.require(:invoice).permit(:state)[:state]
    @state_event = Invoice::STATE_MAPPING[state_param]
  end
end

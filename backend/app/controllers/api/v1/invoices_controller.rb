# frozen_string_literal: true

class Api::V1::InvoicesController < ApplicationController
  def index
    invoices = Invoice.where(borrower_id: borrower_id)
    render json: invoices.as_json(methods: [:actions])
  end

  private

  def borrower_id
    Integer(params.require(:borrower_id))
  end
end

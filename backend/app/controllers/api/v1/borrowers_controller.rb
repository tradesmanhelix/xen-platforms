# frozen_string_literal: true

class Api::V1::BorrowersController < ApplicationController
  def index
    borrowers = Borrower.all
    render json: borrowers
  end
end

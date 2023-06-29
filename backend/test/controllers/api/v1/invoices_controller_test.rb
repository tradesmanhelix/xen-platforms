# frozen_string_literal: true

class Api::V1::InvoicesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_borrower_invoices_url(borrower_id: 1)
    assert_response :success
  end

  test "should respond bad request to invalid index requests" do
    get api_v1_borrower_invoices_url(borrower_id: "foo")
    assert_response :bad_request
  end

  test "should update invoice" do
    put api_v1_invoice_path(id: 1), params: { due_date: 9.weeks.ago, state: "approved" }, as: :json
    assert_response :success
  end

  test "should respond bad request to invalid invoice state transition" do
    put api_v1_invoice_path(id: 1), params: { state: "closed" }, as: :json
    assert_response :bad_request
  end
end

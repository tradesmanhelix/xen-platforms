# frozen_string_literal: true

class Api::V1::InvoicesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_borrower_invoices_url(borrower_id: 1)
    assert_response :success
  end

  test "should respond bad request to invalid requests" do
    get api_v1_borrower_invoices_url(borrower_id: "foo")
    assert_response :bad_request
  end
end

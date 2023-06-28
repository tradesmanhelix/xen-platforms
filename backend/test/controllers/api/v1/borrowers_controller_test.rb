# frozen_string_literal: true

class Api::V1::BorrowersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_borrowers_url
    assert_response :success
  end
end

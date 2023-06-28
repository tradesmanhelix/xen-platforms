class ApplicationController < ActionController::API
  rescue_from ArgumentError do
    render plain: "", status: :bad_request
  end

  rescue_from "ActionController::ParameterMissing" do
    render plain: "", status: :bad_request
  end
end

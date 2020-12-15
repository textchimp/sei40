require 'test_helper'

class DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get app" do
    get dashboard_app_url
    assert_response :success
  end

end

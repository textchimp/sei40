require 'test_helper'

class SecretsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get secrets_index_url
    assert_response :success
  end

  test "should get create" do
    get secrets_create_url
    assert_response :success
  end

end

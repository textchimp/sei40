require 'test_helper'

class MixtapesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get mixtapes_new_url
    assert_response :success
  end

  test "should get create" do
    get mixtapes_create_url
    assert_response :success
  end

  test "should get index" do
    get mixtapes_index_url
    assert_response :success
  end

  test "should get show" do
    get mixtapes_show_url
    assert_response :success
  end

  test "should get edit" do
    get mixtapes_edit_url
    assert_response :success
  end

  test "should get update" do
    get mixtapes_update_url
    assert_response :success
  end

  test "should get destroy" do
    get mixtapes_destroy_url
    assert_response :success
  end

end

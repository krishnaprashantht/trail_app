require 'test_helper'

class EventControllerTest < ActionController::TestCase
  test "should get AddEvent" do
    get :AddEvent
    assert_response :success
  end

  test "should get ViewEventsOptions" do
    get :ViewEventsOptions
    assert_response :success
  end

  test "should get ViewEvents" do
    get :ViewEvents
    assert_response :success
  end

  test "should get ReportEvent" do
    get :ReportEvent
    assert_response :success
  end

  test "should get ViewReportedEvents" do
    get :ViewReportedEvents
    assert_response :success
  end

  test "should get DeleteReportedEvents" do
    get :DeleteReportedEvents
    assert_response :success
  end

  test "should get UnmarkReportedEvents" do
    get :UnmarkReportedEvents
    assert_response :success
  end

end

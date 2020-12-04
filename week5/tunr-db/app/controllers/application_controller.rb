class ApplicationController < ActionController::Base

  # This will cause the fetch_user method to run
  # before every action of every controller
  # (because they all inherit from this one)
  before_action :fetch_user

  def fetch_user

    # Check if the user_id in the session hash is the ID
    # of a real user in our users table: if it is, get
    # object for that user and save it into @current_user
    # which every controller can use; if it's not a real ID,
    # consider it invalid and delete the session (this will
    # prevent weird errors when re-seeding our DB)
    if session[:user_id].present?
      @current_user = User.find_by id: session[:user_id]
    end # if

    # If we did get nil from the above user lookup query,
    # then delete the session (because the user_id is invalid)
    session[:user_id] = nil unless @current_user.present?

  end  #fetch_user


  def check_if_logged_in
    # If the current request is coming from a user who is NOT
    # logged in, redirect them to the login page
    # Any controller actions that should be available only to
    # logged-in users can then run this method before they
    # do their work, i.e. we can lock down those routes
    unless @current_user.present?
      flash[:error] = 'You must be logged in to perform that action.'
      redirect_to login_path
    end

  end


end # ApplicationRecord

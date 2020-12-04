class SessionController < ApplicationController
  def new
  end

  def create
    # raise 'hell'

    # 1. Check if the email address entered is actually in the DB
    user = User.find_by email: params[:email]

    # 2. Did we actually find a user for that email address
    # (or was it nil), AND if we did find a user, is the password
    # correct?
    if user.present? && user.authenticate( params[:password] )
      # Credentials were correct - login successful

      # Get Rails to create a new key/val pair in a special system variable
      # called 'session'; this variable is REMEMBERED ACROSS REQUESTS! (unlike
      # other controller variables) This stateful/persistent memory across
      # requests is implemented using browser cookies: this server will
      # send a 'set-cookie:' header with in the response headers for this
      # page, which it is the browser's job to store, and then also to present
      # to the server again in all future request headers....
      # i.e. the browser will remember that we have already logged in
      session[:user_id] = user.id

      redirect_to root_path

    else
      # Either the user was nil (no such email address), or the
      # password entered into the login form, when encrypted,
      # didn't match the password_digest stored for the email address

      # The flash hash is a bit like 'session' in that it is remembered
      # across page requests... but ONLY for the next page load, and not
      # beyond that. This allows us to show error messages on e.g. login
      # forms when there's been a problem, but the message doesn't stay
      # around after the next reload.
      flash[:error] = 'Invalid email or password'

      redirect_to login_path

    end # login check



  end  #create


  def destroy
    session[:user_id] = nil  # This logs out the user
    redirect_to login_path   # Go back to the login page
  end  #destroy


end

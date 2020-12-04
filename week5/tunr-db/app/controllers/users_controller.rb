class UsersController < ApplicationController
  def new
    @user = User.new  # make a blank User object to give to 'form_with' in the template
  end

  def create

    @user = User.create user_params   #params[:user]

    # Did the above .create actually save to the DB or not?
    if @user.persisted?
      # log the user in automatically so they don't
      # immediately have to enter the same details again
      # into the login form
      session[:user_id] = @user.id
      redirect_to root_path
    else
      # we won't do this:
      # redirect_to login_path

      # instead, we render the template for the 'new' action
      # i.e., the blank form, from this 'create' action
      render :new
    end



  end  #create

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :name)
  end

end # class UsersController

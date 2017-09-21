class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                      params[:user][:password])
    if @user
      login(@user)
      p "Login a user *********"
      p @user
      render '/api/users/show'
    else
      p "Error while logging in a user *********"
      render json: ['Invalid credentials'], status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ['No current user'], status: 404
    end
  end

  def user_params
  params.require(:user).permit(:username, :password)
  end

end

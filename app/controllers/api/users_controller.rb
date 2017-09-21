class Api::UsersController < ApplicationController

def create
  @user = User.new(user_params)

  if @user.save
    p "Create a user *********"
    p @user
    login(@user)
    render :show
  else
    render json: @user.errors.full_messages, status: 401
  end
end

# def destroy
# end

def user_params
  params.require(:user).permit(:username, :password, :email, :phone_number, :img_url)
end

end

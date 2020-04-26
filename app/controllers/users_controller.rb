class UsersController < ApplicationController

  before_action :set_user, except: [ :index, :new, :create ]

  breadcrumb "Users", :users_path, except: [ :index ], if: -> { policy(User).index? }
  breadcrumb -> { @user&.name }, -> { user_path(@user) }, only: [ :edit, :update ]

  def index
    @users = authorize User.order(name: :asc).page(params[:page])
  end

  def new
    @user = authorize User.new
  end

  def show
  end

  def edit
  end

  def create
    @user = authorize User.new
    @user.attributes               = permitted_attributes(@user)
    @user.invited_by               = current_user
    @user.skip_password_validation = true

    if @user.valid? && @user.invite!
      redirect_to users_path, notice: 'User was successfully invited.'
    else
      render :new
    end
  end

  def update
    if @user.update(permitted_attributes(@user))
      redirect_to @user, notice: "User was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @user.destroy

    redirect_to users_path, notice: "User was successfully deleted."
  end

  def resend_invitation
    @user.send_invitation

    redirect_to @user, notice: 'Invitation was sucessfully resent.'
  end

  private

  def set_user
    @user = authorize User.find(params[:id])
  end

  def page_title_hash
    super.merge({
      new: "Invite User",
      create: "Invite User"
    })
  end

end

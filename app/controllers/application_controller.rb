class ApplicationController < ActionController::Base
  include PageTitleable

  before_action :authenticate_user!

end

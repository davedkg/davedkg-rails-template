class ApplicationsController < ApplicationController
  
  before_action :set_page_title
  before_action :set_breadcrumbs, except: [ :index ]
  before_action :set_application, except: [ :index, :new, :create ]
  
  def index
    @applications = Application.order(lname: :asc)
  end

  def new
    @application = Application.new
  end

  def show
  end

  def edit
  end
  
  def create
    @application = Application.new(application_params)
    
    if @application.save
      redirect_to application_path(@application), notice: 'Application was successfully created.'
    else
      render :new
    end
  end
  
  def update
    if @application.update(application_params)
      redirect_to application_path(@application), notice: 'Application was successfully updated.'
    else
      render :edit
    end
  end
  
  private
  
  def set_application
    @application = Application.find(params[:id])
  end
  
  def application_params
    params.require(:application).permit(:name)
  end
  
  def set_page_title
    @page_title = 'Applications'
  end
  
  def set_breadcrumbs
    add_breadcrumb "Applications", applications_path
  end
  
end

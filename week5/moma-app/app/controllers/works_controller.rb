class WorksController < ApplicationController

  # Create

  def new
    @work = Work.new
  end

  def create
    # raise 'hell'
    Work.create work_params  # use strong (filtered) params!
    redirect_to works_path   # back to the index
  end

  # Read

  def index
    @works = Work.all
  end

  def show
    @work = Work.find params[:id]
  end

  def edit
    @work = Work.find params[:id]
  end

  def update
    work = Work.find params[:id]
    work.update work_params  # use strong params
    redirect_to work_path(work.id)
  end

  def destroy
    Work.destroy params[:id]
    redirect_to works_path  # back to index
  end

  private

  def work_params
    params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
  end

end  # class WorksController

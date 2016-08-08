module Api

  class DivisionsController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def index
      respond_with(Division.all)
    end

    def create
      @division = Division.new(division_params)
      if @division.save
        respond_to do |f|
          f.json {render :json => @division}
        end
      end
    end

    def update
      @division = Division.find(params[:id])
      if @division.update(division_params)
        respond_to do |f|
          f.json {render :json => @division}
        end
      end
    end

    def show
      respond_with(Division.find(params[:id]))
    end

    def destroy
      respond_with(Division.destroy(params[:id]))
    end

    private

    def division_params
      params.require(:division).permit(:name)
    end

  end

end
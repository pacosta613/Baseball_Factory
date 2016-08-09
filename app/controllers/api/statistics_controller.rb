module Api
  
  class StatisticsController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def index
      respond_with(Statistic.all)
    end

    def create
      @statistic = Statistic.new(statistic_params)
      if @statistic.save
        respond_to do |f|
          f.json {render :json => @statistic}
        end
      end
    end

    def show
      respond_with(Statistic.find(params[:id]))
    end

    def update
      @statistic = Statistic.find(params[:id])
      if @statistic.update(statistic_params)
        respond_to do |f|
          f.json {render :json => @statistic}
        end
      end
    end

    def destroy
      respond_with(Statistic.destroy(params[:id]))
    end

    private

    def statistic_params
      params.require(:team).permit(:player_id, :team_id, :games, :at_bats, :runs, :homeruns, :hits, :singles, :doubles, :triples, :rbis, :stolen_bases, :caught_stealing)
    end
  end

end
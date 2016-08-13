module Api
  
  class PlayersController < ApplicationController
    
    def index
      binding.pry
      respond_with(Player.all)
    end
    

    def create
      @player = Player.new(player_params)
      if @player.save
        respond_to do |f|
          f.json {render :json => @player}
        end
      end
    end

    def show
      respond_with(Player.find(params[:id]))
    end

    def update
      @player = Player.find(params[:id])
      if @player.update(player_params)
        respond_to do |f|
          f.json {render :json => @player}
        end
      end
    end

    def destroy
      respond_with(Player.destroy(params[:id]))
    end

    private

    def player_params
      params.require(:team).permit(:first_name, :last_name, :position, :team_id, :division_id, :jersey_number)
    end
  end

end
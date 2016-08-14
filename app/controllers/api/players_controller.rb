module Api
  
  class PlayersController < ApplicationController
    
    def index
      respond_with(Player.all)
    end
    
    def create
      @team = Team.find(params[:team_id])
      @player = @team.players.create(player_params)
      respond_with @team, @player
    end

    def show
      respond_with(Player.find(params[:id]))
    end

    def update
      @player = Player.find(params[:id])
      @player.update(player_params)
      respond_with @player
    end

    def destroy
      @player = Player.find(params[:id])
      respond_with @player.destroy
    end

    private

    def player_params
      params.require(:player).permit(:first_name, :last_name, :position, :team_id, :division_id, :jersey_number)
    end
  end

end
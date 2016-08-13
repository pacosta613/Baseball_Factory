module Api
  
  class TeamsController < ApplicationController
    before_action :find_division, except: [:create, :show]
    #before_action :find_division_team, only: [:show, :update, :destroy]
    #before_action :division_team_response, except: [:index]

    def index
      respond_with(Team.all)
    end

    def create
      @division = Division.find(params[:division_id])
      @team = @division.teams.create(team_params)
      respond_with @division, @team
    end

    def show
      respond_with(Team.find(params[:id]))
      #@division = Division.find(params[:division_id])
      #@team = @division.teams.find(params[:id])
      #respond_with @division, @team
    end

    def update
      @team = Team.find(params[:id])
      @team.update(team_params)
      respond_with @team
    end

    def destroy
      @team = Team.find(params[:id])
      respond_with @team.destroy
    end

    private

    def team_params
      params.require(:team).permit(:name, :division_id)
    end

    def find_division
      @division = Division.find_by(params[:division_id])
    end

    def find_division_team
      @team = @division.teams.find(params[:id])
    end

  end

end
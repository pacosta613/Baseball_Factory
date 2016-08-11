module Api
  
  class TeamsController < ApplicationController
    before_action :find_division, except: [:create]
    before_action :find_division_team, only: [:show, :update]
    #before_action :division_team_response, except: [:index]

    def index
      if params[:division_id]
        @division = Division.find(:division_id)
        @teams = @division.teams  
        respond_with @division, @teams
      else
        respond_with(Team.all)
      end
    end

    def create
      @division = Division.find(params[:division_id])
      @team = @division.teams.create(team_params)
      respond_with @division, @team
    end

    def show
      respond_with @division, @team
    end

    def update
      @team.update(team_params)
      respond_with @division, @team
    end

    def destroy
      binding.pry
      @division = Division.find(params[:id])
      @team = @division.teams.find_by(params[:id])
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
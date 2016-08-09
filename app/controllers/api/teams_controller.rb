module Api
  
  class TeamsController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def index
      @division = Division.find(params[:division_id])
      @teams = @division.teams  
      respond_with @division, @teams
    end

    def create
      @team = Team.new(team_params)
      if @team.save
        respond_to do |f|
          f.json {render :json => @team}
        end
      end
    end

    def show
      respond_with(Team.find(params[:id]))
    end

    def update
      @team = Team.find(params[:id])
      if @team.update(team_params)
        respond_to do |f|
          f.json {render :json => @team}
        end
      end
    end

    def destroy
      respond_with(Team.destroy(params[:id]))
    end

    private

    def team_params
      params.require(:team).permit(:name, :division_id)
    end
  end

end
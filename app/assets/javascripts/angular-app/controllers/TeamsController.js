function TeamsController(Team, Teams, $location, $state, $stateParams) {
  var ctrl = this; 
  ctrl.teams = Team.query();
  ctrl.newTeam = new Team();
  ctrl.allTeams = Teams.query();
  ctrl.team = Team.get({id: $stateParams.id});

  ctrl.addTeam = function(){
    ctrl.newTeam.$save(function(){
      $location.path('teams');
    });
  };

  ctrl.editTeam = function(){
    ctrl.team.$update(function(){
      $location.path('teams');
    });
  };

  ctrl.deleteTeam = function(team){
    team.$delete(function(){
      $state.go($state.current, {}, {reload:true});
    });
  };
};

angular 
  .module('app') 
  .controller('TeamsController', TeamsController);
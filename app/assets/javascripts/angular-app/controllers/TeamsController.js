function TeamsController(Team, Teams, Player, $location, $state, $stateParams) {
  var ctrl = this; 
  ctrl.teams = Team.query();
  ctrl.newTeam = new Team();
  ctrl.player = new Player();
  ctrl.allTeams = Team.query();
  ctrl.team = Team.get({id: $stateParams.id});

  ctrl.addTeam = function(){
    ctrl.newTeam.$save(function(){
      ctrl.teams = Team.query()
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

  ctrl.addPlayer = function(player, team) {
    player.team_id = team.id;

    player.$save(function(result){
      console.log(result)
    });
    ctrl.player = new Player();
    $state.go($state.current, {}, {reload: true});
  };
  
};

angular 
  .module('app') 
  .controller('TeamsController', TeamsController);
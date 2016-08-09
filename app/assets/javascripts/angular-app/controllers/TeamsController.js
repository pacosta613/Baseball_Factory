function TeamsController(Team, $location, $state) {
  var ctrl = this; 
  ctrl.teams = Team.query();

  ctrl.deleteTeam = function(team){
    team.$delete(function(){
      $state.go($state.current, {}, {reload:true});
    });
  };
};

angular 
  .module('app') 
  .controller('TeamsController', TeamsController);
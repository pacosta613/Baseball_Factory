function PlayersController(Players, Player, $location, $state, $stateParams, $scope) {
  var ctrl = this;
  ctrl.addStats = new Stat();
  ctrl.newPlayer = new Player();
  ctrl.players = Player.query();
  ctrl.allPlayers = Player.query();
  ctrl.allStats = Stat.query();
  ctrl.player = Player.get({id: $stateParams.id});

  ctrl.addPlayer = function(){
    ctrl.newPlayer.$save(function(){
      $location.path('players')
    });
  };

  ctrl.editPlayer = function(){
    ctrl.player.$update(function(){
      $location.path('players')
    });
  };

  ctrl.deletePlayer = function(player){
    player.$delete(function(){
      $state.go($state.current, {}, {reload: true});
    });
  };

  ctrl.addStats = function(){
    ctrl.player.$save(function(){
      
      
      $location.path('players')
    });
  }
}

angular
  .module('app')
  .controller('PlayersController', PlayersController);
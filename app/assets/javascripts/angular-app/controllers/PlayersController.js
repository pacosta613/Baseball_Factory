function PlayersController(Players, Player, $location, $state, $stateParams, $scope) {
  var ctrl = this;
  ctrl.players = Player.query();
  ctrl.newPlayer = new Player();
  ctrl.allPlayers = Player.query();
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
      debugger
      
      $location.path('players')
    });
  }
}

angular
  .module('app')
  .controller('PlayersController', PlayersController);
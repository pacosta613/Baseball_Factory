function PlayersController(Players, Player, $location, $state, $stateParams) {
  var ctrl = this;
  ctrl.players = Player.query();
  ctrl.newPlayer = new Player();
  ctrl.allPlayers = Players.query();
  ctrl.player = Player.get({id: $stateParams.id});

  ctrl.addPlayer = function(){
    ctrl.newPlayer.$save(function(){
      ctrl.allPlayers = Players.query()
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
}

angular
  .module('app')
  .controller('PlayersController', PlayersController);
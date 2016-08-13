function Player($resource) {

  var Player = $resource('http://localhost:3000/api/teams/:team_id/players'
, {team_id: '@team_id'}, {
    update: { method: 'PUT' }
  });
  return Player; 
}

angular
  .module('app')
  .factory('Player', Player);
function Player($resource) {

  var Player = $resource('http://localhost:3000/api/divisions/:division_id/teams/:team_id/players/:id.json'
, {id: '@id'}, {
    update: { method: 'PUT' }
    //delete: { method: 'DELETE' }
  });
  return Player; 
}

angular
  .module('app')
  .factory('Player', Player);
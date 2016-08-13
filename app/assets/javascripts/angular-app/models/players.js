function Players($resource) {

  var Players = $resource('http://localhost:3000/api/teams/:team_id/players'
, {team_id: '@team_id'}, {
    update: { method: 'PUT' }
  });
  return Players; 
}

angular
  .module('app')
  .factory('Players', Players);
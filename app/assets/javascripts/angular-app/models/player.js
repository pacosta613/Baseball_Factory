function Player($resource) {
  
  var Player = $resource('http://localhost:3000/api/players/:id.json', {id: '@id'}, {
    update: { method: 'PUT' }
  });
  return Player; 
}

angular 
  .module('app')
  .factory('Player', Player)
function Players($resource) {
  
  var Players = $resource('http://localhost:3000/api/players/:id.json', {id: '@id'}, {
    update: { method: 'PUT' }
  });
  return Players; 
}

angular 
  .module('app')
  .factory('Players', Players)
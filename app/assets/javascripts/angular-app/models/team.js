function Team($resource) {
  
  var Team = $resource('http://localhost:3000/api/teams/:id.json', {id: '@id'}, {
    update: { method: 'PUT' }
  });
  return Team; 
}

angular 
  .module('app')
  .factory('Team', Team)
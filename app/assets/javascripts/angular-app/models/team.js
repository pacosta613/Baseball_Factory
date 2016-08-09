function Team($resource) {

  var Team = $resource('http://localhost:3000/api/divisions/:division_id/teams/:id.json'
, {id: '@id'}, {
    update: { method: 'PUT' }
    delete: { method: 'DELETE' }
  });
  return Team; 
}

angular
  .module('app')
  .factory('Team', Team);
function Teams($resource) {
  
  var Teams = $resource('http://localhost:3000/api/teams/:id.json', {id: '@id'}, {
    update: { method: 'PUT' }
  });
  return Teams; 
}

angular 
  .module('app')
  .factory('Teams', Teams)
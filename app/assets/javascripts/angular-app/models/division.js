function Division($resource) {
  
  var Division = $resource('http://localhost:3000/api/divisions/:id.json', {id: '@id'}, {
    update: { method: 'PUT' }
  });
  return Division; 
}

angular 
  .module('app')
  .factory('Division', Division)
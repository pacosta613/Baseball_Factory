function Teams($resource) {

  var Teams = $resource('http://localhost:3000/api/divisions/:division_id/teams'
, {division_id: '@division_id'}, {
    update: { method: 'PUT' }
  });
  return Teams; 
}

angular
  .module('app')
  .factory('Teams', Teams);
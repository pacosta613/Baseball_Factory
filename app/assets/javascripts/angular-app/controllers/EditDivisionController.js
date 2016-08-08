function EditDivisionController(Division, $location, $stateParams){
  var ctrl = this;

  ctrl.division = Division.get({id: $stateParams.id});

  ctrl.editDivision = function(){
    ctrl.division.$update(function(){
      $location.path('divisions');
    });
  };
}

angular
  .module('app')
  .controller('EditDivisionController', EditDivisionController);
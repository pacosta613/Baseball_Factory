function ViewDivisionController(Division, $stateParams){
  var ctrl = this;

  ctrl.division = Division.get({id: $stateParams.id});
}

angular
  .module('app')
  .controller('ViewDivisionController', ViewDivisionController);
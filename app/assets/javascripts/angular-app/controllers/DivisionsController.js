function DivisionsController(Division) {
  var ctrl = this; 
  ctrl.divisions = Division.query();
};

angular 
  .module('app') 
  .controller('DivisionsController', DivisionsController);
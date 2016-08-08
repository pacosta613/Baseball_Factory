 function NewDivisionController(Division, $location) {
  var ctrl = this; 
  ctrl.division = new Division();
  
  ctrl.addDivision = function() {
    ctrl.division.$save(function() {
      $location.path('divisions');
    });
  };
}

angular 
  .module('app') 
  .controller('NewDivisionController', NewDivisionController);
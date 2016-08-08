function DivisionsController(Division, $location, $state) {
  var ctrl = this; 
  ctrl.divisions = Division.query();

  ctrl.deleteDivision = function(division){
    division.$delete(function(){
      $state.go($state.current, {}, {reload:true});
    });
  };
};

angular 
  .module('app') 
  .controller('DivisionsController', DivisionsController);
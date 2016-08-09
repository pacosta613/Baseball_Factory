function DivisionsController(Division, $location, $state, $stateParams) {
  var ctrl = this; 
  ctrl.divisions = Division.query();
  ctrl.newDivision = new Division();
  ctrl.division = Division.get({id: $stateParams.id});

  ctrl.deleteDivision = function(division){
    division.$delete(function(){
      $state.go($state.current, {}, {reload:true});
    });
  };
    
  ctrl.addDivision = function() {
    ctrl.newDivision.$save(function() {
      $location.path('divisions');
    });
  };

  ctrl.editDivision = function(){
    ctrl.division.$update(function(){
      $location.path('divisions');
    });
  };

};

angular 
  .module('app') 
  .controller('DivisionsController', DivisionsController);
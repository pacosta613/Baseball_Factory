function DivisionsController(Division, $location, $state, $stateParams, Team) {
  var ctrl = this; 
  ctrl.divisions = Division.query();
  ctrl.newDivision = new Division();
  ctrl.team = new Team();
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

  ctrl.addTeam = function(team, division){
    team.division_id = division.id;
    team.$save(function(response){
      console.log(response);
    });
    ctrl.team = new Team();
    $state.go($state.current, {}, {reload: true});
  };

};

angular 
  .module('app') 
  .controller('DivisionsController', DivisionsController);
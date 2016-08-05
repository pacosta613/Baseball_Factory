function DivisionsController(){
  var ctrl = this;

  ctrl.divisions = [{
      name: 'West'
    }, {
      name: 'East'
    }];
}

angular
  .module('app')
  .controller('DivisionsController', DivisionsController);
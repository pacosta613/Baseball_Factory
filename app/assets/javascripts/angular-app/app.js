angular
 .module("app", ["ui.router", "ngResource", "templates"])
 .config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state("home", {
       url: "/",
       templateUrl: "home.html",
       controller: "HomeController as ctrl"
     })
     .state("home.new", {
       url: "new",
       templateUrl: "home/new.html",
       controller: 'NewDivisionController as ctrl'
     })
     .state("home.divisions", {
       url: "divisions",
       templateUrl: "home/divisions.html",
       controller: "DivisionsController as ctrl"
     })
     .state("home.division", {
        url: 'division/:id',
        templateUrl: 'home/show.html',
        controller: "ViewDivisionController as ctrl"
     })
     .state("home.edit", {
        url: 'edit/:id',
        templateUrl: 'home/edit.html',
        controller: 'EditDivisionController as ctrl'
     });

  $urlRouterProvider.otherwise("/");
});
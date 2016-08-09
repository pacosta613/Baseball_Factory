angular
 .module("app", ["ui.router", "ngResource", "templates"])
 .config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state("league", {
       url: "/",
       templateUrl: "home.html",
       controller: "LeagueController as ctrl"
     })
     .state("league.new", {
       url: "new",
       templateUrl: "division/new.html",
       controller: 'DivisionsController as ctrl'
     })
     .state("league.divisions", {
       url: "divisions",
       templateUrl: "division/divisions.html",
       controller: "DivisionsController as ctrl"
     })
     .state("league.division", {
        url: 'division/:id',
        templateUrl: 'division/show.html',
        controller: "DivisionsController as ctrl"
     })
     .state("league.edit", {
        url: 'edit/:id',
        templateUrl: 'division/edit.html',
        controller: 'DivisionsController as ctrl'
     })
     .state('league.teams', {
        url: "teams",
        templateUrl: 'team/teams.html',
        controller: 'TeamsController as ctrl'
     });

  $urlRouterProvider.otherwise("/");
});
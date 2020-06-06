///Angular routes

var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  
  .when("/", {
    templateUrl : 'home.html'
  })
  
  .when("/answer", {
    templateUrl : 'answer.html'
  })
  
  .when("/error", {
    templateUrl: 'error.html'
  })
  .otherwise({
    redirectTo: '/error'
  });
}); 
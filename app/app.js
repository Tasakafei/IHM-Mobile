'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('ihm', [
  'ngRoute',
  'ngMaterial',
  'ngMdIcons'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when("/", {
        templateUrl: 'loginView/loginView.html'
      })
      .when("/edit/:note_id",{
        templateUrl: 'editView/editView.html'
      })
      .when("/add/",{
        templateUrl: 'editView/editView.html'
      })
      .when("/list/", {
        templateUrl: 'view1/view1.html'
      })
      .otherwise({
          redirectTo: '/'
      });

}]);
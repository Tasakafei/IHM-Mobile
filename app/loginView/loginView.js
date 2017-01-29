'use strict';

angular.module('ihm')
.controller('LoginViewCtrl', ['$route', '$routeParams', '$location','$scope','NotesService','$mdColorPalette',
  function($route, $routeParams, $location,$scope,NotesService,$mdColorPalette) {
    var noteId = $routeParams.note_id;
    $scope.login = '';
       $scope.validate = function() {
      
        NotesService.setLogin($scope.login);
        
      $location.path('/list/');
      
      }
    


}]);
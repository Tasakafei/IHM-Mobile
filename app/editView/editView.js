'use strict';

angular.module('ihm')
.controller('EditViewCtrl', ['$route', '$routeParams', '$location','$scope','NotesService','$mdColorPalette',
  function($route, $routeParams, $location,$scope,NotesService,$mdColorPalette, socket) {
    var baseColor = Object.keys($mdColorPalette);
    $scope.colors =["red","purple","indigo","teal","orange","green"];
    console.log(baseColor);
    var noteId = $routeParams.note_id;
    $scope.note = {title:undefined,content:undefined,color:"indigo"}
    $scope.primary = "indigo";
    $scope.isPrimary = true;
    if(typeof noteId !== 'undefined'){
      $scope.note = NotesService.getById(noteId);
      $scope.primary = $scope.note.color;
    }
    $scope.validate = function() {
      console.log('validate');
      $scope.note.color = $scope.primary;
      if(typeof noteId === 'undefined'){
        NotesService.add($scope.note);
        console.log(JSON.stringify($scope.note)+'create a new note');
      } else {
        NotesService.update($scope.note);
        console.log("update existing note "+JSON.stringify($scope.note))

      }
      $location.path('/list/');
    }

    //dismiss all changes and go back to edit mode
    $scope.goBack = function() {
      $location.path('/list/');
    }

    $scope.selectTheme = function (color) {
      console.log("select color "+color )
      
      $scope.primary = color;
    };


  }]);
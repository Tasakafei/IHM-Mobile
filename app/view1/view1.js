'use strict';

angular.module('ihm')
.controller('View1Ctrl', ['$route', '$routeParams', '$location','$scope','NotesService', 'socket',
	function($route, $routeParams, $location,$scope,NotesService, socket) {
	var notes = [{title:"machin",content:"Je suis une note qui s'affiche n'est-ce pas fantastique?"},{title:"chose",content:"Pff j'ai pas d'idée, HALP HALP"}];
	$scope.notes = NotesService.get();
	console.log("Loading the view, notes="+notes);
	$scope.changeView = function(note){
    	var earl = '/edit/'+note.id ;
    	console.log("redireeeeeeeekt");
    	$location.path(earl);
	}
	$scope.new = function() {
		$location.path('/add/')
	}

	$scope.push = function() {
		NotesService.push(function(){
			console.log("PUSHHHHHHHHHH");
			$scope.notes = [];
		})
	}

}]);
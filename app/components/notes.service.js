var app = angular.module('ihm');

app.service('NotesService', ['$http', 'socket',function($http, socket) {
	var notes = [];

	socket.on('tabCreateNote', function(note) {
      console.log("tab create note");
      console.log(note);
      add(note);
    })

	function add(note){
		console.log("add note function")
		note.id = notes.length;
		notes.push(note);
	}
	
	function get(){
		return notes;
	}

	function getById(id){
		return notes[id];
	}

	function update(note){
		notes[note.id] = note;
	}

	delete $http.defaults.headers.common['X-Requested-With'];

	function push(callbackFunc) {
		console.log("push function");
		socket.emit("notes", notes, function (){
			console.log("pushed");
		});
		callbackFunc();
	}

	return {
		add: add,
		get: get,
		getById: getById,
		update: update,
		push: push
	}



}]);
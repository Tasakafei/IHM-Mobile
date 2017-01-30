var app = angular.module('ihm');

app.service('NotesService', ['$http', 'socket',function($http, socket) {
	var notes = [];
	var idCounter = 0;
	socket.on('tabCreateNote', function(note) {
		console.log("tab create note");
		console.log(note);
		add(note);
	});


	socket.on('removeNote', function(noteId) {
		remove(noteId);
	});

	function setLogin(newLogin){
		login = newLogin;
	}
	function add(note){
		note.id = notes.length;
		note.login = login;
		notes.push(note);
	}
	function remove(noteId) {
		var note = notes.filter(function(note) {
			return note.id === noteId;
		});

		notes.splice(notes.indexOf(note), 1);
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
		notes.map(function (elem) {
			elem.localId = idCounter++;
		});
		socket.emit("notes", notes, function (){
			console.log("pushed");
		});
		callbackFunc();
	}

	socket.on("updateIDSmartphone", function(noteSent) {
		notes.forEach(function(note) {
			if (!note.id && noteSent.localId === note.localId) {
				note.id = noteSent.id;
			}
		})
	});
	return {
		setLogin: setLogin,
		add: add,
		get: get,
		getById: getById,
		update: update,
		push: push
	}



}]);
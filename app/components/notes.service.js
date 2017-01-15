var app = angular.module('ihm');

app.service('NotesService', ['$http',function($http) {
	var notes = []
	function add(note){
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
    	console.log(io.socket);
    	var i;
    	io.socket.post("/notes",notes, function(body,JWR){
	        	      console.log('Sails responded with: ', body);
	        	      notes = [];
	        	      callbackFunc();
    	});
    	/*for(i = 0; i < notes.length; i++){
	        io.socket.get("/notes",function serverResponded(body, JWR){
	        	      console.log('Sails responded with: ', body);
      console.log('with headers: ', JWR.headers);
      console.log('and with status code: ', JWR.statusCode);
	        });
	        notes = [];
    	}*/
    };

	return {
		add: add,
		get: get,
		getById: getById,
		update: update,
		push: push
	}



}]);

 var myProject = angular.module("myProject");
 var http = require("http");


myProject.controller('StudentsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams ){
		;

	$scope.getStudents = function(){
		$http.get('/api/students').then(function(response){
			$scope.students = response;
			
		});
	}

/*	$scope.getStudent = function(){
		var id = $routeParams.id;
		$http.get('/api/students/id').then(function(response){
			$scope.student = response;
		});
	}

	$scope.addStudent = function(){
		$http.post('/api/students/', $scope.book).then(function(response){
			window.location.href='#/students';
		});
	}

	$scope.updateStudent = function(){
		var id = $routeParams.id;
		$http.put('/api/students/'+id, $scope.book).then(function(response){
			window.location.href='#/students';
		});
	}

	$scope.removeStudent = function(id){
		
		$http.delete('/api/students/'+id).then(function(response){
			window.location.href='#/students';
		});
	}  */
}]);
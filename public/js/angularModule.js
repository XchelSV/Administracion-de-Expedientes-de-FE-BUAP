var app = angular.module('Estoma',['ngRoute', 'ngCookies']);

app.controller ('indexController',function  ($scope , $http, $window, $cookies) {

	var i = 0;
	$scope.array = [0]
	$scope.responsable = false;

	$scope.pushVacuna = function(){

		i++;
		$scope.array.push(i);
		console.log($scope.array);

	}

	$scope.popVacuna = function(){

		if(i==0){

		}else{

			$scope.array.pop(i);
			i--;
			console.log($scope.array);
		}

	}


})
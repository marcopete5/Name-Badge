var app = angular.module('nameBadge', []);

app.controller('MainController', function($scope){

	$scope.addField = function (fields) {
			$scope.allFields.push(fields);
			$scope.newField = {};
	};

	$scope.allFields = [
			{
				fname: "Marcus",
				lname: "Peterson",
				email: "mdabomb5@gmail.com",
				birth: "Sandy",
				phone: "801-555-1234",
				food: "Pizza",
				text: "This is my text"

	}]

}); 

/**
 * 
 */
var myapp = angular.module("apptrainer", ['firebase']);
myapp.controller("registerController", ['$scope','$firebaseObject',function($scope,$firebaseObject) {
	
	$scope.register= function(event) {
		var firebaseObj = new Firebase("https://apptrainer1.firebaseio.com/");
		var fb = $firebaseObject(firebaseObj);

		fb.name= $scope.username;
					fb.age=$scope.age;
					fb.Height=$scope.height;
					fb.password=$scope.password;
					fb.sex=$scope.sex;
					fb.weight=$scope.weight;
					fb.email=$scope.email;
					fb.phone=$scope.phone;
				    fb.Dateofbirth=$scope.date;
					fb.secretQuestion=$scope.question;
					fb.secretanswer=$scope.answer;
				fb.$save().then(function(ref) {
					console.log(ref);

				}, function(error) {
					console.log("Error:", error);
				});
	};
}]);
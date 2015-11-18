'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.message = "";
    $scope.left  = function() {return 100 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";  
    $scope.name= "";
    $scope.age= "";
    $scope.employer= "";
    $scope.ctc= "";};
    $scope.save  = function() {alert("Data Saved");};
});
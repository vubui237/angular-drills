angular.module("arrayApp").controller("arrayController",function($scope,services){
    $scope.array = services.kitkats();
})
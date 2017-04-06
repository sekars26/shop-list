var app = angular.module("shopApp", []);

app.controller("shopController", function($scope, $http) {

	$scope.addItem = function (item) {
    $http.post("ajax/addItem.php?item="+item).success(function(data){
        //getItem();
        $scope.itemInput = "";
      });
  };

});
myAngular.controller("AddController",["$scope", "$state", function($scope,$state){
  $scope.girl = {};
  $scope.Submit = function(){
    $state.go("home", {girl : $scope.girl});
  }

  $scope.Cancel = function(){
    $state.go("home");
  }
}])

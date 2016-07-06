myAngular.controller("EditController",["$scope", "$state", "$stateParams", function($scope, $state, $stateParams){
  $scope.girl = $stateParams.data;
  console.log($stateParams.data);
  $scope.Submit = function(){
    $state.go("home", {girl : $scope.girl});
  }

  $scope.Cancel = function(){
    $state.go("home");
  }
}])

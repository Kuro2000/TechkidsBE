myAngular.controller("HomeController",["$scope", "$state", "$stateParams", function($scope,$state,$stateParams){

  $scope.data = [
    {
      name: "Dzung",
      age: 21,
      facebook: "Dzung",
      password: "bananhtung"
    },
    {
      name: "San",
      age: 21,
      facebook: "Ha San",
      password: "khongphaibananhtung"
    },
    {
      name: "***",
      age: 21,
      facebook: "***",
      password: "***"
    },
    {
      name: "***",
      age: 21,
      facebook: "***",
      password: "***"
    },
    {
      name: "***",
      age: 21,
      facebook: "***",
      password: "***"
    },
  ]

  if($stateParams.girl){
    $scope.data.push($stateParams.girl);
  }

  $scope.delete = function(index){
    $scope.data.splice(index,1);
  }
  $scope.click = function(){
    $state.go("page-2");
  }
  $scope.GoToHome = function(){
    $state.go("home");
  }
  $scope.Add = function(){
    $state.go("add")
  }
  $scope.update = function(){
    $state.go("edit", {data : $scope.data})
  }
}]);

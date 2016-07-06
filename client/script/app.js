var myAngular = angular.module("myAngular",["ui.router"]);

myAngular.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state('home',{
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "HomeController",
      params: {girl:null}
    });

  $stateProvider.state('page-2',{
      url: "/page-2",
      templateUrl: "templates/page-2.html",
    });

  $stateProvider.state('add',{
      url: "/add",
      templateUrl: "templates/add.html",
      controller: "AddController"
    });

  $stateProvider.state('edit',{
      url: "/edit",
      templateUrl: "templates/edit.html",
      controller: "EditController",
      params: {data}
    });
});

myAngular.directive("techkids",[function(){
  return{
    restrict : "E",
    templateUrl:"templates/techkids.html",
    link : function(scope, element, attrs){

    }
  }
}])

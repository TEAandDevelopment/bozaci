var myApp = angular.module('myApp', [
  'ngRoute',
  'ngCookies'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'views/partial/index.html',
            controller: 'HomePageController',
            resolve: {
              talha: function ($cookieStore) {
                console.log("resolve : " + $cookieStore.get("talha"));
              }
            }
        }).
        when('/login', {
            templateUrl: 'views/partial/login.html',
            controller: 'LoginController'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);
myApp
.controller('HomePageController', ['$scope', '$routeParams', '$cookieStore',
    function ($scope, $routeParams, $cookieStore) {
        console.log($cookieStore.get("talha"));
    }
])
.controller('LoginController', ['$scope', '$routeParams', '$cookieStore',
    function ($scope, $routeParams, $cookieStore) {
    	$scope.loginYap = function() {
    	    $cookieStore.put("talha", {id: 1,naber:"iyidir"});
    	};
    }
]);
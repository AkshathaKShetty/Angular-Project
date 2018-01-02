var myApp = angular.module("myApp", ['ui.router', 'myLogin', 'homePage']);
myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider       
    .state('Login', {
        url: '/Login',
        templateUrl: 'LoginPage.html',
        controller: 'LoginPageCtrl'
    })
     .state('Home', {
         url: '/Home',
         templateUrl: 'LoginPage.html',
         controller: 'LoginPageCtrl'
     })
    .state('Grid', {
        url: '/Grid',
        templateUrl: 'GridView.html',
        controller: 'HomePageCtrl'
    });
    //$urlRouterProvider.otherwise()
}]);
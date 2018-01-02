
var homePage = angular.module("homePage", []);
homePage.controller("homePageCtrl", function ($scope) {
    $scope.groceryList = [
            { Name: "Aashirwad Wheat Flour", Price: "55", Rating: "4.5", Image: "C:\\Users\\ram\\Desktop\\aashirvaad-multi-grain-atta.jpg" },
            { Name: "Tata Moong Dal", Price: "70", Rating: "5", Image: "C:\\Users\\ram\\Desktop\\Tata Moong Dal.jpg" },
            { Name: "Parle G Biscuits", Price: "40", Rating: "5", Image: "C:\\Users\\ram\\Desktop\\Parle G Biscuits.jpg" }];

    $scope.gridView = function () {
        $state.go('Grid');
    };


});

//homepage.directive("HomePageView", function () {
//    return {
//        restrict: 'E',
//        templateUrl: 'GridView.html',
//        replace: true,
//        scope: {
//            grocery: '='
//        }
//        link: function (scope, elem, attr) {
//            elem.bind('click',function(){
//                elem.css('width','70px');
//            });
      
//        }
//}
//});







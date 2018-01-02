var myLogin = angular.module("myLogin", []);
myLogin.controller("LoginPageCtrl", function ($scope,UserData) {
   
});

myLogin.factory('UserData', function () {
    var User = {};
    return {
        list: userList,
        updateUserData: function (UserDataArr) {
            if (window.localStorage && UserDataArr) {
                localStorage.setItem("user", angular.toJson(UserDataArr));
            }
            userList = UserDataArr;

        },
        getUserData: function () {
            userList = angular.fromJson(localStorage.getItem("user"));
            return userList ? userList : [];
        }
    };
});


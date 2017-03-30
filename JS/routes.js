angular.module("myApp").config(
    function($routeProvider) {
    $routeProvider
        .when("/home",{
        templateUrl : "Angularlab1/templates/Home.html",
        controller: "homeCtrl"
        })
        .when("/signup",{
        templateUrl : "Angularlab1/templates/Signup.html",
        controller: "formCtrl"
        })
        .when("/login",{
        templateUrl : "Angularlab1/templates/login.html",
        controller: "loginCtrl"
        })
        .when("/account",{
        templateUrl: "Angularlab1/templates/Account.html"
    })
    });

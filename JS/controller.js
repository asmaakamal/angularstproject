angular.module("myApp").controller("homeCtrl", function($scope,myData) {
       myData.getData().then(function(result){
       $scope.products = result.data;
   }, function(err){
        console.log(err);
   })
})
.controller("formCtrl", function($rootScope,$scope,$location) {
    $scope.createAcc= function(isValid){
        if(isValid){
            $rootScope.user = $scope.user;
            $location.url("/login");
        }
    }
})
.controller("loginCtrl", function($scope,$rootScope,$location){
   $scope.compareData = function(isValid){
       if(isValid){
           if($rootScope.user.Name == $scope.usr.Name && $rootScope.user.Password == $scope.usr.Password){
           $location.url("/account");
       }
       }
   }
});
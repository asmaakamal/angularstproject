angular.module("myApp").factory("myData", function($http,$q){
    return{
        getData: function(){
        var defer = $q.defer();
        $http({
        url: "http://test.w34.co/json/",
        method: 'GET'
    })
    .then (function(result){
        defer.resolve(result);
        //console.log(res.data);
    },
          function(err){
        defer.reject(err);
    })
    return defer.promise;
    }
    }
});
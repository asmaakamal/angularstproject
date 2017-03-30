angular.module("myApp").directive("starRating", function(){
    return {
        scope: {
            ngModel: '=?'
        },
            link: function(scope,element){
                scope.ngModel = scope.ngModel || 0;
                var stars = scope.ngModel;
                for(var i=0; i<stars; i++){
                    element.append('<i class="glyphicon glyphicon-star"><\i>');              }
                for(var i=0; i<5-stars; i++){
                   element.append('<i class="glyphicon glyphicon-star-empty"><\i>'); 
                }
            }
    }
});
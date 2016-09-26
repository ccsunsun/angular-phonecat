/**
 * Created by admin on 2016/9/22.
 */
angular.module('filters', []).
    filter('checkmark',function(){//过滤器命名checkmark
    return function(input){
        return input?'\u2713':'\u2718';//判断true or false
    }
}).
    filter('fc',function(){
     return function(input){
         switch (input){
             case 34:
                 return 'a';
             case 35:
                 return 'b';
             case 36:
                 return 'c';
             default:
                 return 'd'
         }
     }
});
/**
 * Created by admin on 2016/9/22.
 */
angular.module('phonecat', ['filters']).
config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/phones', {templateUrl: 'test-6.html', controller: list}).
    when('/phones/:phoneId', {templateUrl: 'test-7.html', controller: detail}).
    otherwise({redirectTo: '/phones'});
}]);

/**
 * Created by admin on 2016/9/22.
 */

//手机列表
function list($scope,$http){
    // 初始化
    $http.get('json/phones.json').success(function(data){
        $scope.phones=data.splice(0,5);
    });
}

//单个手机详细
function detail($scope, $routeParams, $http){
    $scope.phoneId = $routeParams.phoneId;
    $http.get('json/'+$routeParams.phoneId+'.json').success(function(data){
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    };
    $scope.list=[
        {
            "name":34,
            "code":34
        },
        {
            "name":35,
            "code":35
        },
        {
            "name":36,
            "code":36
        },
    ];
    $scope.hello = function(name){
        alert('hello '+(name||'world')+'!');
    }
}
var app = angular.module("app",["ngRoute","me-lazyload"]);
// config配置路由
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/home",{  //主页
		templateUrl:"html/home.html",
		controller:"homecontroller"
	})
	.when("/piece",{  //一套
		templateUrl:"html/titleList.html",
		controller:"skeyController"
	})
	.when("/cover",{  //一件
		templateUrl:"html/cover.html",
		controller:"coverController"
	})
	.when("/article",{  //一篇
		templateUrl:"html/article.html",
		controller:"article_con"
	})
	.when("/aside",{  //侧边栏
		templateUrl:"html/aside.html",
		controller:""
	})
	.when("/myself",{  //个人中心
		templateUrl:"html/myself.html",
		controller:"myself_con"
	})
	.when("/coverDatail/:serial",{  //一件商品详情
		templateUrl:"html/coverDatail.html",
		controller:"getCoverDatail"
	})
	.otherwise({
		redirectTo:'/home' //默认
	})
}]);

app.controller("rootController",function($scope){
	$scope.isShow = true;
	$scope.showImg = function(){
		$scope.isShow = !$scope.isShow;
	}
	$scope.hideImg = function(){
		$scope.isShow = !$scope.isShow;
	}
})
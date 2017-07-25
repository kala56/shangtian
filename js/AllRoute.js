var app = angular.module("app",["ngRoute"]);
// config配置路由
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/home",{  //主页
		templateUrl:"html/home.html",
		controller:"homecontroller"
	})
	// .when("/piece",{  //一套
	// 	templateUrl:"",
	// 	controller:""
	// })
	// .when("/cover",{  //一件
	// 	templateUrl:"",
	// 	controller:""
	// })
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
	// .otherwise({
	// 	redirectTo:'/home' //默认
	// })
}]);

app.controller("rootController",function($scope){
	$scope.isShow = true;
	$scope.showImg = function(){
		$scope.isShow = !$scope.isShow;
	}
	$scope.hideImg = function(){
		$scope.isShow = !$scope.isShow;
	}
	$scope.togeImg = function(){
		$scope.isShow = !$scope.isShow;
	}
	$scope.home = function(){
		$scope.isShow = !$scope.isShow;
	}
	// $scope.homeImg = function(){
	// 	$scope.isShow = !$scope.isShow;
	// }
	// $scope.one = function(){
	// 	$scope.isShow = !$scope.isShow;
	// }
	// $scope.two = function(){
	// 	$scope.isShow = !$scope.isShow;
	// }
	$scope.three = function(){
		$scope.isShow = !$scope.isShow;
	}
	$scope.collect = function(){
		$scope.isShow = !$scope.isShow;
	}
})
var app = angular.module("app",["ngRoute","me-lazyload"]);
// config配置路由
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/home",{  //主页
		templateUrl:"",
		controller:""
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
	// .when("/myself",{  //个人中心
	// 	templateUrl:"html/myself.html",
	// 	controller:"myself_con"
	// })
	// .otherwise({
	// 	redirectTo:'/home' //默认
	// })
}]);

app.controller("rootController",function($scope){
	$scope.isShow = true;
	$scope.showImg = function(){
		// console.log("------"+$scope.isShow)
		$scope.isShow = !$scope.isShow;
	}
	$scope.hideImg = function(){
		console.log("------"+$scope.isShow)
		$scope.isShow = !$scope.isShow;
	}
})
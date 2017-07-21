var app = angular.module("app",["ngRoute"]);
// config配置路由
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/home",{  //主页
		templateUrl:"",
		controller:""
	})
	.when("/piece",{  //一套
		templateUrl:"html/titleList.html",
		controller:"skeyController"
	})
	.when("/cover",{  //一件
		templateUrl:"",
		controller:""
	})
	.when("/article",{  //一篇
		templateUrl:"html/article.html",
		controller:"article_con"
	})
	.when("/aside",{  //侧边栏
		templateUrl:"",
		controller:""
	})
	.otherwise({
		redirectTo:'/home' //默认
	})
}]);
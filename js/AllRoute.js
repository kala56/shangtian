var app = angular.module("app",["ngRoute"]);
// config配置路由
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/home",{  //主页
		templateUrl:"",
		controller:""
	})
	.when("/piece",{  //一套
		templateUrl:"",
		controller:""
	})
	.when("/cover",{  //一件
		templateUrl:"",
		controller:""
	})
	.when("/article",{  //一篇
		templateUrl:"",
		controller:""
	})
	.when("/aside",{  //侧边栏
		templateUrl:"",
		controller:""
	})
}]);
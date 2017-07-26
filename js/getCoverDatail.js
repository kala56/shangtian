app.controller("getCoverDatail",function($scope,$routeParams,$http){
	// 接收参数
	var ser = $routeParams.serial;
	$scope.allDatail = [];
	$http({
		method:"get",
		params:ser,
		url:"data/shangtian.php?type=getProDetail&product_serial="+ser
	}).then(function(data){
		console.log(data);
		$scope.allDatail = data.data.data;
	})
})
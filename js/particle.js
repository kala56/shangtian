app.controller("particleController",function($scope,$routeParams,$http){
	var arr = $routeParams.defaultde;
	console.log(arr);
	var number = arr.split(",");
	console.log(number);
	for(var i = 0;i<number.length;i++){
		$http({
			methods:"get",
			params:arr,
			url:"data/shangtian.php?type=getProDetail&product_serial="+number[i]
		}).then(function(data){
			console.log(data);
			$scope.serialMessage = data.data.data;
			console.log($scope.serialMessage);
		});
	}
});
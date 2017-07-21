app.controller("skeyController",function($scope,$http){
	
	$http({
		url:"data/shangtian.php?type=A_set_menu"
	}).then(function(data){
		console.log(data);
		$scope.skeyList = data.data.data.list;
		console.log($scope.skeyList);
	});
	$http({

		url:"data/shangtian.php?type=setList&occasion_id=30&pageIndex=1"
	}).then(function(data){
		console.log(data);
		$scope.skeyProduct = data.data.data.list;
		console.log($scope.skeyProduct);
	});
	$http({
		url:"data/shangtian.php?type=setList&occasion_id=19&pageIndex=1"
	}).then(function(data){
		console.log(data);
		$scope.liveProduct = data.data.data.list;
		console.log($scope.liveProduct);
	
	});
	$http({
		url:"data/shangtian.php?type=setList&occasion_id=22&pageIndex=1"
	}).then(function(data){
		console.log(data);
		$scope.schoolProduct = data.data.data.list;
		console.log($scope.schoolProduct);
	
	});
	$http({
		url:"data/shangtian.php?type=setList&occasion_id=23&pageIndex=1"
	}).then(function(data){
		console.log(data);
		$scope.trystProduct = data.data.data.list;
		console.log($scope.trystProduct);
	
	});
	
});



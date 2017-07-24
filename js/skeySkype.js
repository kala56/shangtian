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
		$scope.lifeProduct = data.data.data.list;
		console.log($scope.lifeProduct);
	});
	console.log($(".title li a").length);
	for(var i = 0;i< $(".title li a").length;i++){
		$($(".title li a")[i]).click(function(){
			$scope.index = $(".title li a").index(this);
			console.log("-=-=-=");
		});
	}
});
// $($(".title>li>a")[0]).click(function () {
// 	$($(".title>li>a")[0]).attr("href","#best");
// })

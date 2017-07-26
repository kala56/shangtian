
app.controller("skeyController",function($scope,$http,$location){
	var getSwiper = new Swiper('.swiper-container',{
		onSlideChangeEnd:function(swiper){
			$(".nav>.title>li:first-child>a").css({"color":"grey","border-bottom":"none"});
			$(".nav>.title>li>a").removeClass("colorIncrease");
			$($(".nav>.title>li>a")[swiper.activeIndex]).addClass("colorIncrease");
		}
	});
	$http({
		url:"data/shangtian.php?type=A_set_menu"
	}).then(function(data){
		console.log(data);
		$scope.skeyList = data.data.data.list;
		console.log($scope.skeyList);

		$scope.changeParts = function(index){			
			$(".nav>.title>li:first-child>a").css({"color":"grey","border-bottom":"none"});
			$(".nav>.title>li>a").removeClass("colorIncrease");
			$($(".nav>.title>li>a")[index]).addClass("colorIncrease");
			getSwiper.slideTo(index,500,false);
		}
		$scope.getNews = function(num){
			$location.path("/pieceDatail/"+num);
		}
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
	$http({
		url:"data/shangtian.php?type=setList&occasion_id=24&pageIndex=1"
	}).then(function(data){
		console.log(data);
		$scope.salesProduct = data.data.data.list;
		console.log($scope.salesProduct);
	
	});
	
});



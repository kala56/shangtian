app.controller("coverController",function($scope,$http){
	$scope.coverList = [];
	// 获取商品菜单
	$http({
		url:"data/shangtian.php?type=getNavCategoryList"
	}).then(function(data){
		//console.log(data.data.data.list); //得到一个数组
		$scope.coverList = data.data.data.list;
		// 点击菜单切换界面
		$scope.changeFace = function(index){
			// 将第一菜单恢复原状
			$(".coverMenu>.outBox>.menuList>div:first-child>span").css({
				"color":"white",
				"border-bottom":"none"
			});
			$(".coverMenu>.outBox>.menuList>div>span").removeClass("ColorBor");
            $($(".coverMenu>.outBox>.menuList>div>span")[index]).addClass("ColorBor");
            mySwiper.slideTo(index, 500,false);
		}
	})
	// 获取商品列表
	$scope.productList = [];
	$http({
		url:"data/shangtian.php?type=productList&categoryId=30&pageIndex=1"
	}).then(function(data){
		// console.log(data.data.data.product_list); //得到一个商品列表数组
		$scope.productList = data.data.data.product_list;
		$scope.like = function($index){
			if($($(".Sright>img")[$index]).hasClass("isLove")){
				$($(".Sright>img")[$index]).attr("src","images/已收藏@2x.png");
				$($(".Sright>img")[$index]).css("animation","big .4s linear");
				// 移除该属性
				$($(".Sright>img")[$index]).removeClass("isLove");
				// 点赞加一
				$($(".Sright>span")[$index]).html(parseInt($($(".Sright>span")[$index]).html())+1);
			}else{
				$($(".Sright>img")[$index]).attr("src","images/正常@2x.png");
				$($(".Sright>img")[$index]).css("animation","big1 .4s linear");
				// 添加该属性
				$($(".Sright>img")[$index]).addClass("isLove");
				// 取消赞减一
				$($(".Sright>span")[$index]).html(parseInt($($(".Sright>span")[$index]).html())-1);
			}
			
		}	
	})
	// 上衣商品列表
	$scope.jacketList = [];
	$http({
		url:"data/shangtian.php?type=productList&categoryId=1&pageIndex=1"
	}).then(function(data){
		// console.log(data.data.data.product_list); //得到一个商品列表数组
		$scope.jacketList = data.data.data.product_list;
		// 点赞效果
		$scope.likeTwo = function(index){
			if($($(".twoBox>.Sright>div>img")[index]).hasClass("isLove")){
				$($(".twoBox>.Sright>div>img")[index]).attr("src","images/已收藏@2x.png");
				$($(".twoBox>.Sright>div>img")[index]).css("animation","big .4s linear");
				// 移除该属性
				$($(".twoBox>.Sright>div>img")[index]).removeClass("isLove");
				// 点赞加一
				$($(".twoBox>.Sright>span")[index]).html(parseInt($($(".twoBox>.Sright>span")[index]).html())+1);
			}else{
				$($(".twoBox>.Sright>div>img")[index]).attr("src","images/正常@2x.png");
				$($(".twoBox>.Sright>div>img")[index]).css("animation","big1 .4s linear");
				// 添加该属性
				$($(".twoBox>.Sright>div>img")[index]).addClass("isLove");
				// 取消赞减一
				$($(".twoBox>.Sright>span")[index]).html(parseInt($($(".twoBox>.Sright>span")[index]).html())-1);
			}
			
		}	
	})


	// 第六个界面详情
	$http({
		url:"data/shangtian.php?type=productList&categoryId=62&pageIndex=1"
	}).then(function(data){
		console.log(data); //得到一个商品列表数组
		// $scope.jacketList = data.data.data.product_list;
		// 点赞效果
		// $scope.likeTwo = function(index){
		// 	if($($(".twoBox>.Sright>div>img")[index]).hasClass("isLove")){
		// 		$($(".twoBox>.Sright>div>img")[index]).attr("src","images/已收藏@2x.png");
		// 		$($(".twoBox>.Sright>div>img")[index]).css("animation","big .4s linear");
		// 		// 移除该属性
		// 		$($(".twoBox>.Sright>div>img")[index]).removeClass("isLove");
		// 		// 点赞加一
		// 		$($(".twoBox>.Sright>span")[index]).html(parseInt($($(".twoBox>.Sright>span")[index]).html())+1);
		// 	}else{
		// 		$($(".twoBox>.Sright>div>img")[index]).attr("src","images/正常@2x.png");
		// 		$($(".twoBox>.Sright>div>img")[index]).css("animation","big1 .4s linear");
		// 		// 添加该属性
		// 		$($(".twoBox>.Sright>div>img")[index]).addClass("isLove");
		// 		// 取消赞减一
		// 		$($(".twoBox>.Sright>span")[index]).html(parseInt($($(".twoBox>.Sright>span")[index]).html())-1);
		// 	}
			
		// }	
	})
	// 获取商品详情
	// $http({
	// 	url:"data/shangtian.php?type=getProDetail&product_serial=10001479"
	// }).then(function(data){
	// 	console.log(data); //得到一个数组
	// })
	// 板块滑动
	var mySwiper = new Swiper('.swiper-container',{
                onSlideChangeEnd: function(swiper) {
                	// 将第一菜单恢复原状
                	$(".coverMenu>.outBox>.menuList>div:first-child>span").css({
						"color":"white",
						"border-bottom":"none"
					});
                	$(".coverMenu>.outBox>.menuList>div>span").removeClass("ColorBor");
                   $($(".coverMenu>.outBox>.menuList>div>span")[swiper.activeIndex]).addClass("ColorBor");
                }
			})
})
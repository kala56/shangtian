app.controller("coverController",function($scope,$http,$location){
	$scope.coverList = [];
	// 获取商品菜单
	$http({
		url:"data/shangtian.php?type=getNavCategoryList"
	}).then(function(data){
		console.log(data.data.data.list); //得到一个数组
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
		// 页面间传值的实现
		$scope.getDatail = function(id){
			$location.path("/coverDatail/"+id);
		}
	})
	// 获取BEST商品列表
	$scope.productList = [];
	$http({
		url:"data/shangtian.php?type=productList&categoryId=30&pageIndex=1"
	}).then(function(data){
		$scope.productList = data.data.data.product_list;
		// console.log(data.data.data.product_list);
		$scope.like = function($index){
			if($($(".smallDatial>.Sright>img")[$index]).hasClass("isLove")){
				$($(".smallDatial>.Sright>img")[$index]).attr("src","images/已收藏@2x.png");
				$($(".smallDatial>.Sright>img")[$index]).css("animation","big .4s linear");
				// 移除该属性
				$($(".smallDatial>.Sright>img")[$index]).removeClass("isLove");
				// 点赞加一
				$($(".smallDatial>.Sright>span")[$index]).html(parseInt($($(".smallDatial>.Sright>span")[$index]).html())+1);
			}else{
				$($(".smallDatial>.Sright>img")[$index]).attr("src","images/正常@2x.png");
				$($(".smallDatial>.Sright>img")[$index]).css("animation","big1 .4s linear");
				// 添加该属性
				$($(".smallDatial>.Sright>img")[$index]).addClass("isLove");
				// 取消赞减一
				$($(".smallDatial>.Sright>span")[$index]).html(parseInt($($(".smallDatial>.Sright>span")[$index]).html())-1);
			}
			
		}
		// 如果价格一样时，就不存在原价和现价
		$(document).scroll(function(){
			for(var i = 0; i < data.data.data.product_list.length; i++){
				if(data.data.data.product_list[i].fix_price == data.data.data.product_list[i].price){
					$($(".priceAndImg>div>.through")[i]).css("text-decoration","none");
					$($(".priceAndImg>div>.through")[i]).next().css("display","none");
				}
			}
		})
	})
	// 上衣商品列表
	$scope.jacketList = [];
	$http({
		url:"data/shangtian.php?type=productList&categoryId=1&pageIndex=1"
	}).then(function(data){
		$scope.jacketList = data.data.data.product_list;
		// console.log(data.data.data.product_list);
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
		// 如果价格一样时，就不存在原价和现价
		$(document).scroll(function(){
			for(var i = 0; i < data.data.data.product_list.length; i++){
				if(data.data.data.product_list[i].fix_price == data.data.data.product_list[i].price){
					$($(".coverTwoBox .priceAndInfo>.through")[i]).css("text-decoration","none");
					$($(".coverTwoBox .priceAndInfo>.through")[i]).next().css("display","none");
				}
			}
		})	
	})
	// 下装界面列表
	var pantsList = [];
	$http({
		url:"data/shangtian.php?type=productList&categoryId=14&pageIndex=1"
	}).then(function(data){
		$scope.pantsList = data.data.data.product_list;	
		// console.log(data.data.data.product_list);
		// 点赞效果
		$scope.likeThree = function(index){
			if($($(".coverThreeBox>.twoBox>.Sright>div>img")[index]).hasClass("isThree")){
				$($(".coverThreeBox>.twoBox>.Sright>div>img")[index]).attr("src","images/已收藏@2x.png");
				$($(".coverThreeBox>.twoBox>.Sright>div>img")[index]).css("animation","big .4s linear");
				// 移除该属性
				$($(".coverThreeBox>.twoBox>.Sright>div>img")[index]).removeClass("isThree");
				// 点赞加一
				$($(".coverThreeBox>.twoBox>.Sright>span")[index]).html(parseInt($($(".coverThreeBox>.twoBox>.Sright>span")[index]).html())+1);
			}else{
				$($(".coverThreeBox>.twoBox>.Sright>div>img")[index]).attr("src","images/正常@2x.png");
				$($(".coverThreeBox>.twoBox>.Sright>div>img")[index]).css("animation","big1 .4s linear");
				// 添加该属性
				$($(".coverThreeBox>.twoBox>.Sright>div>img")[index]).addClass("isThree");
				// 取消赞减一
				$($(".coverThreeBox>.twoBox>.Sright>span")[index]).html(parseInt($($(".coverThreeBox>.twoBox>.Sright>span")[index]).html())-1);
			}
			
		}
		// 如果价格一样时，就不存在原价和现价
		$(document).scroll(function(){
			for(var i = 0; i < data.data.data.product_list.length; i++){
				if(data.data.data.product_list[i].fix_price == data.data.data.product_list[i].price){
					$($(".coverThreeBox .priceAndInfo>.through")[i]).css("text-decoration","none");
					$($(".coverThreeBox .priceAndInfo>.through")[i]).next().css("display","none");
				}
			}
		})	
	})
  	//鞋履界面列表
  	var shopsList = [];
	$http({
		url:"data/shangtian.php?type=productList&categoryId=16&pageIndex=1"
	}).then(function(data){
		$scope.shopsList = data.data.data.product_list;
		// console.log(data.data.data.product_list);
		// 点赞效果
		$scope.likeFour = function(index){
			if($($(".coverFourBox>.twoBox>.Sright>div>img")[index]).hasClass("isFour")){
				$($(".coverFourBox>.twoBox>.Sright>div>img")[index]).attr("src","images/已收藏@2x.png");
				$($(".coverFourBox>.twoBox>.Sright>div>img")[index]).css("animation","big .4s linear");
				// 移除该属性
				$($(".coverFourBox>.twoBox>.Sright>div>img")[index]).removeClass("isFour");
				// 点赞加一
				$($(".coverFourBox>.twoBox>.Sright>span")[index]).html(parseInt($($(".coverFourBox>.twoBox>.Sright>span")[index]).html())+1);
			}else{
				$($(".coverFourBox>.twoBox>.Sright>div>img")[index]).attr("src","images/正常@2x.png");
				$($(".coverFourBox>.twoBox>.Sright>div>img")[index]).css("animation","big1 .4s linear");
				// 添加该属性
				$($(".coverFourBox>.twoBox>.Sright>div>img")[index]).addClass("isFour");
				// 取消赞减一
				$($(".coverFourBox>.twoBox>.Sright>span")[index]).html(parseInt($($(".coverFourBox>.twoBox>.Sright>span")[index]).html())-1);
			}
			
		}	
		// 如果价格一样时，就不存在原价和现价
		$(document).scroll(function(){
			for(var i = 0; i < data.data.data.product_list.length; i++){
				if(data.data.data.product_list[i].fix_price == data.data.data.product_list[i].price){
					$($(".coverFourBox .priceAndInfo>.through")[i]).css("text-decoration","none");
					$($(".coverFourBox .priceAndInfo>.through")[i]).next().css("display","none");
				}
			}
		})	
	})
	//配饰界面列表
  	var littleList = [];
	$http({
		url:"data/shangtian.php?type=productList&categoryId=17&pageIndex=1"
	}).then(function(data){
		$scope.littleList = data.data.data.product_list;
		// console.log(data.data.data.product_list);
		// 点赞效果
		$scope.likeFive = function(index){
			if($($(".coverFiveBox>.twoBox>.Sright>div>img")[index]).hasClass("isFive")){
				$($(".coverFiveBox>.twoBox>.Sright>div>img")[index]).attr("src","images/已收藏@2x.png");
				$($(".coverFiveBox>.twoBox>.Sright>div>img")[index]).css("animation","big .4s linear");
				// 移除该属性
				$($(".coverFiveBox>.twoBox>.Sright>div>img")[index]).removeClass("isFive");
				// 点赞加一
				$($(".coverFiveBox>.twoBox>.Sright>span")[index]).html(parseInt($($(".coverFiveBox>.twoBox>.Sright>span")[index]).html())+1);
			}else{
				$($(".coverFiveBox>.twoBox>.Sright>div>img")[index]).attr("src","images/正常@2x.png");
				$($(".coverFiveBox>.twoBox>.Sright>div>img")[index]).css("animation","big1 .4s linear");
				// 添加该属性
				$($(".coverFiveBox>.twoBox>.Sright>div>img")[index]).addClass("isFive");
				// 取消赞减一
				$($(".coverFiveBox>.twoBox>.Sright>span")[index]).html(parseInt($($(".coverFiveBox>.twoBox>.Sright>span")[index]).html())-1);
			}
			
		}	
		// 如果价格一样时，就不存在原价和现价
		$(document).scroll(function(){
			for(var i = 0; i < data.data.data.product_list.length; i++){
				if(data.data.data.product_list[i].fix_price == data.data.data.product_list[i].price){
					$($(".coverFiveBox .priceAndInfo>.through")[i]).css("text-decoration","none");
					$($(".coverFiveBox .priceAndInfo>.through")[i]).next().css("display","none");
				}
			}
		})	
	})
	// 玩儿界面列表
	var playList = [];
	$http({
		url:"data/shangtian.php?type=productList&categoryId=62&pageIndex=1"
	}).then(function(data){
		$scope.playList = data.data.data.product_list;
		// console.log(data.data.data.product_list);
		// 点赞效果
		$scope.likeSix = function(index){
			if($($(".coverSixBox>.twoBox>.Sright>div>img")[index]).hasClass("isEnd")){
				$($(".coverSixBox>.twoBox>.Sright>div>img")[index]).attr("src","images/已收藏@2x.png");
				$($(".coverSixBox>.twoBox>.Sright>div>img")[index]).css("animation","big .4s linear");
				// 移除该属性
				$($(".coverSixBox>.twoBox>.Sright>div>img")[index]).removeClass("isEnd");
				// 点赞加一
				$($(".coverSixBox>.twoBox>.Sright>span")[index]).html(parseInt($($(".coverSixBox>.twoBox>.Sright>span")[index]).html())+1);
			}else{
				$($(".coverSixBox>.twoBox>.Sright>div>img")[index]).attr("src","images/正常@2x.png");
				$($(".coverSixBox>.twoBox>.Sright>div>img")[index]).css("animation","big1 .4s linear");
				// 添加该属性
				$($(".coverSixBox>.twoBox>.Sright>div>img")[index]).addClass("isEnd");
				// 取消赞减一
				$($(".coverSixBox>.twoBox>.Sright>span")[index]).html(parseInt($($(".coverSixBox>.twoBox>.Sright>span")[index]).html())-1);
			}
			
		}	
		// 如果价格一样时，就不存在原价和现价
		$(document).scroll(function(){
			for(var i = 0; i < data.data.data.product_list.length; i++){
				if(data.data.data.product_list[i].fix_price == data.data.data.product_list[i].price){
					$($(".coverSixBox .priceAndInfo>.through")[i]).css("text-decoration","none");
					$($(".coverSixBox .priceAndInfo>.through")[i]).next().css("display","none");
				}
			}
		})
	})
	// 获取商品详情
	$http({
		url:"data/shangtian.php?type=getProDetail&product_serial=10001479"
	}).then(function(data){
		console.log(data); //得到一个数组
	})

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
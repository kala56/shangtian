app.controller("getCoverDatail",function($scope,$routeParams,$http){
	// 接收参数
	var ser = $routeParams.serial;
	$scope.allDatail;
	$scope.keys = [];
	$http({
		method:"get",
		params:ser,
		url:"data/shangtian.php?type=getProDetail&product_serial="+ser
	}).then(function(data){
		console.log(data.data.data);
		$scope.allDatail = data.data.data;
		// 监听概率图出现在可视区域时加载完成
		for(var key in data.data.data.occasion_evaluate){
			var objKey = {
				name:key,
				rate:data.data.data.occasion_evaluate[key]
			}
			$scope.keys.push(objKey);
		}		
		$scope.lookImgone = data.data.data.instruction_image[0];
		$scope.lookImgtwo = data.data.data.instruction_image[1];
		$scope.lookImgthree = data.data.data.instruction_image[2];
		$scope.lookImgfour = data.data.data.instruction_image[3];
		// 去掉进入菜单的按钮
		$(".fixed").css("display","none");

	})
	// 点赞效果
		$scope.likethis = function(){
			if($($(".collection>img")).hasClass("isLike")){
				$($(".collection>img")).attr("src","images/已收藏—单品详情@2x.png");
				$($(".collection>img")).css("animation","big .4s linear");
				// 移除该属性
				$($(".collection>img")).removeClass("isLike");
			}else{
				$($(".collection>img")).attr("src","images/上（常态）—单品详情@2x.png");
				$($(".collection>img")).css("animation","big1 .4s linear");
				// 添加该属性
				$($(".collection>img")).addClass("isLike");
			}
			
		}
	//返回按钮
	$(".fixedHead>img:first-child").click(function(){
		//通过调用浏览器的返回事件，实现返回到主页的效果
		window.history.back();
		$(".fixed").css("display","block");
	});
	// $(document).ready(function() {
	// 		$('.rateTwo>.myStat2').circliful();
	//     });
	var mySwiper = new Swiper('.swiper-container',{
             onSlideChangeEnd: function(swiper) {
             	// 将第一菜单恢复原状
                	$(".DatailBox>.trueImg>.trueImgBox>.Loop>div:first-child").css("visibility","hidden");
                	$(".DatailBox>.trueImg>.trueImgBox>.Loop>div").css("visibility","hidden");
                   $($(".DatailBox>.trueImg>.trueImgBox>.Loop>div")[swiper.activeIndex]).css("visibility","visible");
             }
		})
})

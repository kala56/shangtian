app.controller("article_con",function($scope,$http){
	$scope.articleBox = [];
	$http({
		url:"data/shangtian.php?type=getArticleCategoryList"
	}).then(function(data){
		// console.log(data);
		$scope.articleBox =data.data.data.list;
		// console.log($scope.articleBox);
		
		$scope.fun = function(index){
		 	//	列表变 翻页
			mySwiper.slideTo(index, 500, false);
				
			for (var i =0;i <$(".article_nav>li>div").length; i++) {
				if (i == index) {
					$($(".article_nav>li>div")[i]).addClass("article_hover");

				}else{
					$($(".article_nav>li>div")[i]).removeClass("article_hover");

				}
			}

		}
		//列表第一个li样式
		setTimeout(function(){
			$(".article_nav li")[0].querySelector('div').className = "article_hover";
			
		},100);

	});
	//风格
	$scope.articleStyle = [];
	$http({
		url:"data/shangtian.php?type=articleList&categoryId=53&pageIndex=1"
	}).then(function(data){
		// console.log(data);
		$scope.articleStyle =data.data.data.list;
		// console.log($scope.articleStyle);
		//点赞 变化
		$scope.love_one = function($index){ 
			var img =$($(".article_one>img")[$index]);
			var qq =$($(".article_one>span")[$index]);
			setTimeout(function(){	
		        	$('.collect').css('display','none');   	  	
	   		}, 2500);
			if (img.attr("src") == ('images/场景-收藏@2x.png')) {			
				img.attr("src","images/场景-已收藏@2x.png");			
				qq.text(parseInt(qq.text())+1);	
				$('.collect').text('收藏成功');	
				$($(".article_one>img")[$index]).css('animation','big .4s linear');
				$('.collect').css('display','block');
				$(".fixed").addClass('animated pulse');
				$('.collect').addClass('animated fadeIn');
			}else{
                img.attr("src", 'images/场景-收藏@2x.png');
                qq.text(parseInt(qq.text())-1);
				$('.collect').text('取消收藏');
				$($(".article_one>img")[$index]).css('animation','big1 .4s linear');
				$('.collect').css('display','block');
				$('.collect').addClass('animated fadeIn');
			}
		}
	});
	//穿衣
	$scope.articleDress = [];
	$http({
		url:"data/shangtian.php?type=articleList&categoryId=57&pageIndex=1"
	}).then(function(data){
		// console.log(data);
		$scope.articleDress =data.data.data.list;
		// console.log($scope.articleDress);
		$scope.love_two = function($index){ 
			var img =$($(".article_two>img")[$index]);
			var qq =$($(".article_two>span")[$index]);
			console.log("123");
			setTimeout(function(){	
		        	$('.collect').css('display','none');   	  	
	   		}, 2500);
			if (img.attr("src") == ('images/场景-收藏@2x.png')) {			
				img.attr("src","images/场景-已收藏@2x.png");			
				qq.text(parseInt(qq.text())+1);	
				$('.collect').text('收藏成功');	
				$($(".article_two>img")[$index]).css('animation','big .4s linear');
				$('.collect').css('display','block');
				$(".fixed").addClass('animated pulse');
				$('.collect').addClass('animated fadeIn');
			}else{
                img.attr("src", 'images/场景-收藏@2x.png');
                qq.text(parseInt(qq.text())-1);
				$('.collect').text('取消收藏');
				$($(".article_two>img")[$index]).css('animation','big1 .4s linear');
				$('.collect').css('display','block');
				$('.collect').addClass('animated fadeIn');
			}
		}
	});
	//穿鞋
	$scope.articlePuton = [];
	$http({
		url:"data/shangtian.php?type=articleList&categoryId=56&pageIndex=1"
	}).then(function(data){
		// console.log(data);
		$scope.articlePuton =data.data.data.list;
		// console.log($scope.articlePuton);
	});
	//知识
	$scope.articleKnowledge = [];
	$http({
		url:"data/shangtian.php?type=articleList&categoryId=55&pageIndex=1"
	}).then(function(data){
		// console.log(data);
		$scope.articleKnowledge =data.data.data.list;
		// console.log($scope.articleKnowledge);
	});
	//人物
	$scope.articleMan = [];
	$http({
		url:"data/shangtian.php?type=articleList&categoryId=54&pageIndex=1"
	}).then(function(data){
		// console.log(data);
		$scope.articleMan =data.data.data.list;
		// console.log($scope.articleMan);
	});

	var mySwiper = new Swiper('.swiper-container',{
                onSlideChangeEnd: function(swiper) { 
                //翻页变 列表变               	
                	$(".article_nav>li>div").removeClass("article_hover");
                	$($(".article_nav>li>div")[swiper.activeIndex]).addClass("article_hover");
                }

	})
	// console.log($(".article_nav>li"))
	// $(".article_nav>li")[0].className = "article_hover";
})

app.controller("homecontroller",function($scope,$http){
    $scope.upskyList = []; 
    $scope.centerskyList = [];
    $scope.minimg = [];
    $http({
        url:"data/shangtian.php?type=homeinit"
    }).then(function(data){
        console.log(data);
        $scope.upskyList = data.data.data.banners;
        console.log($scope.upskyList);
        for (var i = 0 ; i < data.data.data.banners.length; i++) {
            if (data.data.data.banners.words_style == 2) {
                $($(".num")[i]).css({"color":"white","border":"1px solid red"});
            }
        }
        setTimeout(function(){
            var herswiper = new Swiper ('.headerone ',{
                paginationClickable:true,
                grabCursor:true,
                pagination:'.swiper-pagination',
                autoplay : 3000,    
                loop: true,
                autoplayDisableOnInteraction : false,
                observer:true,
                observeParents:true
            });
          
        },0);       
    });
    $http({
        url:"data/shangtian.php?type=homeinit"
    }).then(function(data){
        for (var i = 0 ; i < data.data.data.recommend.length; i++) {
            data.data.data.recommend[i].isShow = true;
            if (data.data.data.recommend[i].collect_type != 1) {
                data.data.data.recommend[i].isShow = false;
                data.data.data.recommend[i].head_image = data.data.data.recommend[i].cover_image
                $(".phrase").css({"width":"19%","margin-left":"20px","background-color":"rgb(51,51,51)","color":"rgb(250,207,20)","padding":"5px"})
          
            }else{
                $(".minimages_box").css("display","none");
            } 

        }
       
         $scope.centerskyList = data.data.data.recommend;
        console.log($scope.centerskyList);
        
    });    

});

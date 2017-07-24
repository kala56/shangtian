app.controller("homecontroller",function($scope,$http){
    $scope.upskyList = []; 
    $scope.centerskyList = [];
    $http({
        url:"data/shangtian.php?type=homeinit"
    }).then(function(data){
        console.log(data);
        $scope.upskyList = data.data.data.banners;
        console.log($scope.upskyList);
        for (var i = 0 ; i < $scope.upskyList.length; i++) {
            if ($scope.upskyList[i].words_style == 2) {
                $($(".num")[i]).css({"color":"white","border":"1px solid red"});
            }
        }
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
        var myswiper = new Swiper('.headertwo', {
            effect: 'flip',
            flip: {
                slideShadows : false,      
            },
            observer:true,
            noSwiping : true,
            noSwipingClass : 'stop-swiping',
            observeParents:true,
            slideShadows:false   
        });   
        herswiper.params.control = myswiper; 
    });
    $http({
        url:"data/shangtian.php?type=homeinit"
    }).then(function(data){
         $scope.centerskyList = data.data.data.recommend;
        console.log($scope.centerskyList);
        for (var i = 0 ; i < $scope.centerskyList.length; i++) {
            if ($scope.centerskyList[i].collect_type == 1) {
                $("titleimage").css("background-image","url("+$scope.centerskyList[i].head_image+")");
                // console.log($scope.centerskyList[i].head_image)
            }else{
                $("titleimage").css("background-image","url("+$scope.centerskyList[i].cover_image+")");
            }
        }
    });

    
});

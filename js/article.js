app.controller("article_con",function($scope,$http){
	$scope.articleBox = [];
	$http({
		url:"data/shangtian.php?type=getArticleCategoryList"
	}).then(function(data){
		console.log(data);
		$scope.articleBox =data.data.data.list;
		console.log($scope.articleBox);
	})
})
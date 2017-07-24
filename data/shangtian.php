<?php 
	$type = $_REQUEST['type'];
	$str = '';
	if ($type == 'homeinit') {//首页幻灯及商品列表
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/homeinit');
	}elseif ($type == 'homeMore') {//首页上拉加载
		$pageIndex = $_REQUEST['pageIndex'];//页数，从1开始
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/homelist?page='.$pageIndex);
	}elseif ($type == "A_set_menu") {//一套-顶部菜单
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/Topic/getNavTopicOccasionList');
	}elseif ($type == 'setList') {//获取一套-产品列表
		$occasion_id = $_REQUEST['occasion_id'];//菜单id，参照A_set_menu中的值
		$pageIndex = $_REQUEST['pageIndex'];//页数，从1开始
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/Topic/getHomeList?occasion_id='.$occasion_id.'&page='.$pageIndex);
	}elseif ($type == 'getNavCategoryList') {//获取一件-顶部菜单
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/Product/getNavCategoryList');
	}elseif ($type == 'productList') {//一件-产品列表
		$categoryId = $_REQUEST['categoryId'];//分类id，参照getNavCategoryList中获取到的值
		$pageIndex = $_REQUEST['pageIndex'];//页数
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/Product/getHomeList?category_Id='.$categoryId.'&page='.$pageIndex);
	}elseif ($type == 'getArticleCategoryList') {//一篇-顶部菜单
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/article/getArticleCategoryList');
	}elseif ($type == "articleList") {//商品列表
		$categoryId = $_REQUEST['categoryId'];//分类id，参照getNavCategoryList中获取到的值
		$pageIndex = $_REQUEST['pageIndex'];//页数
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/article/list?categoryId='.$categoryId.'&page='.$pageIndex);
	}elseif ($type == 'getProDetail') {//获取商品详情
		$product_serial = $_REQUEST['product_serial'];//商品的product_serial
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/Product/getInfo?product_serial='.$product_serial);
	}
	elseif ($type == 'getCode') {//获取验证码
		$mobile = $_REQUEST['mobile'];
		$opts = array (
			'http' => array (
			'method' => 'POST',
			'header'=> "Content-type: application/x-www-form-urlencoded"
			)
		);
		@$context = stream_context_create($opts);
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/user/request_smg_code?mobile='.$mobile, false, $context);
	}elseif ($type == 'regist') {//注册
		$mobile = $_REQUEST['mobile'];
		$smg_code = $_REQUEST['smg_code'];//短信验证码
		$pwd = $_REQUEST['pwd'];
		$opts = array (
			'http' => array (
			'method' => 'POST',
			'header'=> "Content-type: application/x-www-form-urlencoded"
			)
		);
		@$context = stream_context_create($opts);
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/user/register?mobile='.$mobile.'&smg_code='.$smg_code.'&user_pass='.$pwd, false, $context);
	}
	elseif ($type == 'login') {
		$mobile = $_REQUEST['mobile'];
		$pwd = $_REQUEST['pwd'];
		$opts = array (
			'http' => array (
			'method' => 'POST',
			'header'=> "Content-type: application/x-www-form-urlencoded"
			)
		);
		@$context = stream_context_create($opts);
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/user/login?mobile='.$mobile.'&user_pass='.$pwd, false, $context);
	}
	elseif ($type == 'get_collect_list') {//获取收藏
		$token = $_REQUEST['token'];//登录、注册成功后返回的user_token
		$userID = $_REQUEST['userID'];//登录、注册成功后返回的user_token
		$collect_type = $_REQUEST['collect_type'];//收藏的类型，1-一件，2-一套，3-一篇
		$opts = array (
			'http' => array (
			'method' => 'POST',
			'header'=> "Content-type: application/x-www-form-urlencoded"
			)
		);
		@$context = stream_context_create($opts);
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/user/get_collect_list?user_id='.$userID.'&access_token='.$token.'&collect_type='.$collect_type);
	}elseif ($type == "addFav") {//新增/删除收藏
		$token = $_REQUEST['token'];//登录、注册成功后返回的user_token
		$userID = $_REQUEST['userID'];//登录、注册成功后返回的user_token
		$collect_type = $_REQUEST['collect_type'];//收藏的类型，1-一件，2-一套，3-一篇
		$collect_id = $_REQUEST['collect_id'];//收藏商品/文章的id，商品对应topic_id，文章对应：article_id
		$action = $_REQUEST['action'];//0表示删除，1表示添加
		$str = file_get_contents('http://api.shangtianapp.com/api/v1/user/user_collect?user_id='.$userID.'&access_token='.$token.'&collect_id='.$collect_id.'&collect_type='.$collect_type.'&action='.$action);
	}elseif ($type == "getHistory") {
		$str = file_get_contents('http://api.shangtianapp.com/api/v2/moment/show_history');
	}
	echo "$str";
?>
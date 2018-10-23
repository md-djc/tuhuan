$(function(){
	//加入我们
	$(".con .item").hover(function(){
		$(this).css("background","#f0f0f0");
		$(this).find("span>span").show();
	},function(){
		if($(this).next(".submenu").is(":hidden")){
			$(this).find("span>span").hide();
			$(this).css("background","#f8f8f8");
		}
	});
	$(".con .item").click(function(){
		$(this).next(".submenu").slideToggle(500);
		$(this).siblings(".item").css("background","#f8f8f8");
		$(this).siblings(".item").find("span>span").hide();
		$(this).next().siblings(".submenu").slideUp(500);
	});
});





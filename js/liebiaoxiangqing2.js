//全部品牌下拉菜单*
$(function(){
		$("#textX").mouseenter(function(){
			$("#Fixed4").css({"display":"block"});
		});
		$("#Fixed4").mouseleave(function(){
			$(this).css({"display":"none"});
		});
		
		$("#quanbu11").mouseenter(function(){
			$("#Fixed3").css({"display":"block"});
		});
		$("#Fixed3").mouseleave(function(){
			$(this).css({"display":"none"});
		});
		
		
    });	
    
//右侧栏动画
	$(function(){
		$("#Fixed div p").on("mouseover",function(){
			$("#Fixed div p span").stop().animate(
									{   
										
										"left": "-100px"
									}, 1000
								);
		});
		$("#Fixed div p").on("mouseout",function(){
			$("#Fixed div p span").stop().animate(
									{
										
										"left": "-300px"
									}, 1000
								);
		});
		
		$("#Fixedx").click(function(){
			$("#Fixed5").css({"display": "block"});
		});
		$("#Fixedy").click(function(){
			$("#Fixed5").css({"display": "none"});
		});
				
		
    });		
    

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
   //菜单展开方法
  /* $(function(){
	$("#cons").on("click",function(){	//会把选中的菜单的序号传给data参数
		var divs=document.getElementsByClassName("contxz");//取得所有子菜单
		//for(var i=0;i<divs.length;i++){
			//divs[i].style.display="none";//循环将所有子菜单设置为不显示
		//}
		var div=document.getElementsByClassName("contxx");//根据序号取得需要显示的子菜单
		div.style.display="block";//设置子菜单为显示
	}); 
});*/

$(function(){		
		$(".contxz").eq(1).mouseenter(function(){		
			$(".contxx").eq(0).slideDown(2000,function(){			
			});
		});	
		$(".contxz").eq(1).mouseleave(function(){		
			$(".contxx").eq(0).slideUp(2000,function(){			
			});
		});	
		$(".contxz").eq(2).mouseenter(function(){		
			$(".contxx").eq(1).slideDown(2000,function(){			
			});
		});	
		$(".contxz").eq(2).mouseleave(function(){		
			$(".contxx").eq(1).slideUp(2000,function(){			
			});
		});	
		$(".contxz").eq(3).mouseenter(function(){		
			$(".contxx").eq(2).slideDown(2000,function(){			
			});
		});	
		$(".contxz").eq(3).mouseleave(function(){		
			$(".contxx").eq(2).slideUp(2000,function(){			
			});
		});	
		$(".contxz").eq(4).mouseenter(function(){		
			$(".contxx").eq(3).slideDown(2000,function(){			
			});
		});	
		$(".contxz").eq(4).mouseleave(function(){		
			$(".contxx").eq(3).slideUp(2000,function(){			
			});
		});	
		$(".contxz").eq(5).mouseenter(function(){		
			$(".contxx").eq(4).slideDown(2000,function(){			
			});
		});	
		$(".contxz").eq(5).mouseleave(function(){		
			$(".contxx").eq(4).slideUp(2000,function(){			
			});
		});	
		$(".contxz").eq(6).mouseenter(function(){		
			$(".contxx").eq(5).slideDown(2000,function(){			
			});
		});	
		$(".contxz").eq(6).mouseleave(function(){		
			$(".contxx").eq(5).slideUp(2000,function(){			
			});
		});	
		$(".contxz").eq(7).mouseenter(function(){		
			$(".contxx").eq(6).slideDown(2000,function(){			
			});
		});	
		$(".contxz").eq(7).mouseleave(function(){		
			$(".contxx").eq(6).slideUp(2000,function(){			
			});
		});	
		$(".contxz").eq(8).mouseenter(function(){		
			$(".contxx").eq(7).slideDown(2000,function(){			
			});
		});	
		$(".contxz").eq(8).mouseleave(function(){		
			$(".contxx").eq(7).slideUp(2000,function(){			
			});
		});	
});
//商品列表从josn获取
/*    ajax("php/goods.json",function(res){
    	var data=JSON.parse(res);
    	var oLen=data.length;
    	//var oUl=document.getElementById("container");
    	console.log(oLen);
    	for(var i=0;i<oLen;i++){
	  		$("#container").append('<li><p><a href="#"><img src='+data[i].Url+'/></a></p><p><span>'+data[i].price+'</span><span>'+data[i].Name1+'</span></p><p>'+data[i].Name2+'</p><p>'+data[i].Name3+'</p><p>'+data[i].Name4+'</p><p><a href="#">'+data[i].Name5+'</a></p></li>');
    	}
    	
    });
*/
//从后台拿到所有收据
/*
$.get("php/getGoodsList.php", function(data){
	var data=eval(data);
    console.log(data);
   var oLen=data.length;
    for(var i=0;i<oLen;i++){
	  		$("#container").append('<li><p><a href="#"><img src='+data[i].goodsImg+'/></a></p><p><span>'+data[i].goodsPrice+'</span><span>'+data[i].beiyong1+'</span></p><p>'+data[i].goodsName+'</p><p>'+data[i].goodsType+'</p><p>'+data[i].goodsDesc+'</p><p><a href="#">'+data[i].beiyong2+'</a></p></li>');
    	}
});
*/
//从后台得到想要的数据

$("#suosuo").click(function(){	
		$.get("php/getGoodsInfo.php",{goodsId:$("#int01").val()},function(data){	
	var data=eval('('+data+')');
	console.log(data);
	console.log(data.goodsImg);
	
	$("#container").append('<li><p><a href="#"><img src="'+data.goodsImg+'"/></a></p><p><span>'+data.goodsPrice+'</span><span>'+data.beiyong1+'</span></p><p>'+data.goodsName+'</p><p>'+data.goodsType+'</p><p>'+data.goodsDesc+'</p><p><a href="#">'+data.beiyong2+'</a></p></li>');
    	
		});		 
	 
	});








$(function(){
	if(getCookie("userName")!=""){
		$("#welcomex").css("display","none");
$("#welcomey").css({"display":"block","margin-left":"30px","margin-right":"200px","width":"200px","float":"left"}); 
        $("#cook").html(getCookie("userName"));
	}
    $("#zhuxiao").click(function(){
    	$("#welcomex").css("display","block");
 	$("#welcomey").css({"display":"none","margin-left":"30px","margin-right":"200px","width":"200px","float":"left"}); 
    });
    ////document.close(removeCookie("userName"));
});

//给ul绑定一个click事件，但是对li起作用。
	//此事件委托：把给子元素li绑定的click事件委托给父元素ul。
$(function(){
	
	$("#container").delegate("li","click",function(){
	//console.log($(this).html());
	
	
	
	
	
	});
	
});
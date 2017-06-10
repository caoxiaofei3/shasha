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
      

//cookie用户名
$(function(){
	if(getCookie("userName")!=""){
		$("#welcomex").css("display","none");
$("#welcomey").css({"display":"block","margin-left":"30px","margin-right":"200px","width":"200px","float":"left"}); 
        $("#cook").html(getCookie("userName"));
	}
        ////document.close(removeCookie("userName"));
        $("#zhuxiao").click(function(){
    	$("#welcomex").css("display","block");
 	$("#welcomey").css({"display":"none","margin-left":"30px","margin-right":"200px","width":"200px","float":"left"}); 
    });
});

//得到后台的购物车数据
var heji=0;
$(function(){
	
	$.get("php/getShoppingCart.php",{vipName:getCookie("userName")},function(data){
	var data=eval(data);
    console.log(data);
   var oLen=data.length;
   if(oLen!=0){
   	    for(var i=0;i<oLen;i++){
	  		$("#cont").append('<li class="Oli"><img src="'+data[i].goodsImg+'" class="gwc0"/><span class="gwc1"><em>'+data[i].goodsName+'</em><em>'+data[i].goodsDesc+'</em><em>直降</em><em>直降活动</em></span><span class="gwc2">'+data[i].goodsPrice+'</span><span class="gwc3"><input type="button" value="-" class="minus" /><input type="text" value="'+data[i].goodsSum+'" class="num"id="'+data[i].goodsId+'" /><input type="button" value="+" class="plus"/></span><span class="gwc4">￥'+data[i].goodsPrice*data[i].goodsSum+'</span><span class="gwc5"><input type="button" value="删除" class="dete" id="'+data[i].goodsId+'"/></span></li>');
	  		heji=heji+data[i].goodsPrice*data[i].goodsSum;
    	}
   	    $("#totalprice").html("￥"+heji);
   }else{
   	$("#conx").attr("display","none");
   	$("#conx11").attr("display","block");
   }
   //同步变异步
	setTimeout(function(){
		console.log("这是changN函数的异步操作代码");
		changN();
	},1000); 
});
});
//购物车加减
function changN(){
	$(".minus").live("click", function() {
			var spanzhi=$(this).next().val();
		if(spanzhi>0){
			spanzhi=parseInt(spanzhi)-1;
			$(this).next().val(spanzhi);
		}
		$(this).parent().next().html(spanzhi*parseInt($(this).parent().prev().html()));		
	    heji-=parseInt($(this).parent().prev().html());
	    $("#totalprice").html("￥"+heji);
	    
	    $.get("php/addShoppingCart.php",{vipName:getCookie("userName"),goodsId:$(this).next().attr("id"),goodsCount:-1},function(data){
	  		if(data=="1"){
	  			//alert("修改成功");
	  		}
	  	
		});
	    
	});
		
$(".plus").live("click", function() {
  		var spanzhi=$(this).prev().val();		
			spanzhi=parseInt(spanzhi)+1;
			$(this).prev().val(spanzhi);
			$(this).parent().next().html(spanzhi*parseInt($(this).parent().prev().html()));
	    heji+=parseInt($(this).parent().prev().html());
	    $("#totalprice").html("￥"+heji);
	    
	     $.get("php/addShoppingCart.php",{vipName:getCookie("userName"),goodsId:$(this).prev().attr("id"),goodsCount:1},function(data){
	  		if(data=="1"){
	  			//alert("修改成功");
	  		}
	  	
		});
})

$(".dete").live("click",function(){
			$.get("php/deleteGoods.php", {vipName:getCookie("userName"),goodsId:$(this).attr("id")},function(data){
			if(data==true){
				//var that=this;
				//$(this).parents(".Oli").remove();
				//$(this).parents(".Oli").css("display","none");
				//$(this).parent().css("display","none");
				//heji-=parseInt($(this).parent().prev().html());
				//$("#totalprice").html("￥"+heji);
				location.href="gouwuche1.html";
				
			}
		})
	})








}

//加购物车的数量
$(function(){
	if(getCookie("userName")!=""){
	$.get("php/getShoppingCart.php",{vipName:getCookie("userName")},function(data){
	var data=eval(data);
    //console.log(data);
   var oLen=data.length;
    //2、保存cookie（把用户名保存在cookie里）
        saveCookie("oLen",oLen,5);
});
    //alert(getCookie("oLen"));
    $("#oLen").html(getCookie("oLen"));
    $("#count").html(getCookie("oLen")+"件");
    }
});




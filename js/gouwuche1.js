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
      
function changN(str){
	var minus =str.getElementsByClassName("minus")[0];
	var num =str.getElementsByClassName("num")[0];
	var plus =str.getElementsByClassName("plus")[0];
	var price1 =str.getElementsByClassName("gwc2")[0];
	var price2 =str.getElementsByClassName("gwc4")[0];
	var oUl=document.getElementById("cont");
	var count=document.getElementById("count");
    var totalprice=document.getElementById("totalprice");
    
	 //加号点击
	 plus.onclick=function(){
	 	var n = parseInt(num.value);
	 	if(n<5&&n>0){
	 		num.value = n+1;
	 		//console.log(minus.disabled);
	 		minus.disabled = false;
	 		minus.style.cursor = "pointer";
	 		if(num.value==99){
	 			plus.disabled = true;
	 			plus.style.cursor = "not-allowed";
	 		  }
	 		}else{
	 			plus.disabled = true;
	 			plus.style.cursor = "not-allowed";
	 		}
			//console.log(price1.innerHTML);
			price2.innerHTML=num.value*(price1.innerHTML)+".0";
			//console.log(price2.innerHTML);
			if(oUl.getElementsByClassName("num")[0].value){
		  	    count.innerHTML=(oUl.getElementsByClassName("num")[0].value)*1;
		 		totalprice.innerHTML=(oUl.getElementsByClassName("gwc4")[0].innerHTML)*1+".0";
			}
			if(oUl.getElementsByClassName("num")[0].value&&oUl.getElementsByClassName("num")[1].value){
		  	    count.innerHTML=(oUl.getElementsByClassName("num")[0].value)*1+(oUl.getElementsByClassName("num")[1].value)*1;
		 		totalprice.innerHTML=(oUl.getElementsByClassName("gwc4")[0].innerHTML)*1+(oUl.getElementsByClassName("gwc4")[1].innerHTML)*1+".0";
			}
			if(oUl.getElementsByClassName("num")[0].value&&oUl.getElementsByClassName("num")[1].value&&oUl.getElementsByClassName("num")[2]){
		  	    count.innerHTML=(oUl.getElementsByClassName("num")[0].value)*1+(oUl.getElementsByClassName("num")[1].value)*1+(oUl.getElementsByClassName("num")[2].value)*1;
		 		totalprice.innerHTML=(oUl.getElementsByClassName("gwc4")[0].innerHTML)*1+(oUl.getElementsByClassName("gwc4")[1].innerHTML)*1+(oUl.getElementsByClassName("gwc4")[2].innerHTML)*1+".0";
			}
	  	    //console.log(count);
	  	    //console.log(totalprice);
	 }
	 //减号效果
	 minus.onclick = function(){
	 	var n = parseInt(num.value);
	 	if(n>1&&n<6){
	 		num.value = n-1;
	 		plus.disabled = false;
	 		plus.style.cursor = "pointer";
	 		if(num.value==1){
	 			minus.disabled = true;
	 			minus.style.cursor = "not-allowed"
	 		}
	 	}else{
	 		minus.disabled = true;
	 		minus.style.cursor = "not-allowed"
	 	}
	 	price2.innerHTML=num.value*price1.innerHTML;
	 	if(oUl.getElementsByClassName("num")[0].value){
	  	    count.innerHTML=(oUl.getElementsByClassName("num")[0].value)*1;
	 		totalprice.innerHTML=(oUl.getElementsByClassName("gwc4")[0].innerHTML)*1+".0";
		}
		if(oUl.getElementsByClassName("num")[0].value&&oUl.getElementsByClassName("num")[1].value){
	  	    count.innerHTML=(oUl.getElementsByClassName("num")[0].value)*1+(oUl.getElementsByClassName("num")[1].value)*1;
	 		totalprice.innerHTML=(oUl.getElementsByClassName("gwc4")[0].innerHTML)*1+(oUl.getElementsByClassName("gwc4")[1].innerHTML)*1+".0";
		}
		if(oUl.getElementsByClassName("num")[0].value&&oUl.getElementsByClassName("num")[1].value&&oUl.getElementsByClassName("num")[2]){
	  	    count.innerHTML=(oUl.getElementsByClassName("num")[0].value)*1+(oUl.getElementsByClassName("num")[1].value)*1+(oUl.getElementsByClassName("num")[2].value)*1;
	 		totalprice.innerHTML=(oUl.getElementsByClassName("gwc4")[0].innerHTML)*1+(oUl.getElementsByClassName("gwc4")[1].innerHTML)*1+(oUl.getElementsByClassName("gwc4")[2].innerHTML)*1+".0";
		}
	}
}
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
$(function(){
	$.get("php/getShoppingCart.php",{vipName:getCookie("userName")},function(data){
	var data=eval(data);
    console.log(data);
   var oLen=data.length;
   if(oLen!=0){
   	    for(var i=0;i<oLen;i++){
	  		$("#cont").append('<li><img src="'+data[i].goodsImg+'" class="gwc0"/><span class="gwc1"><em>'+data[i].goodsName+'</em><em>'+data[i].goodsDesc+'</em><em>直降</em><em>直降活动</em></span><span class="gwc2">￥'+data[i].goodsPrice+'</span><span class="gwc3"><input type="button" value="-" class="minus" /><input type="text" value="'+data[i].goodsSum+'" class="num" /><input type="button" value="+" class="plus"/></span><span class="gwc4"></span><span class="gwc5"><input type="button" value="删除" class="dete"/></span></li>');
    	}
   }else{
   	$("#conx").attr("display","none");
   	$("#conx11").attr("display","block");
   }
    
});
});
 

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
    }
});
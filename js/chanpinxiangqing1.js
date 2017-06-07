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
//cookie处理    
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

////购物车数量处理
var minus =document.getElementById("minus");//购物车数量
var num =document.getElementById("num");
var plus =document.getElementById("plus");
 //加号点击
 plus.onclick=function(){
 	var n = parseInt(num.value);
 	if(n<199&&n>0){
 		num.value = n+1;
 		console.log(minus.disabled);
 		minus.disabled = false;
 		minus.style.cursor = "pointer";
 		if(num.value==199){
 			plus.disabled = true;
 			plus.style.cursor = "not-allowed";
 		  }
 		}else{
 			plus.disabled = true;
 			plus.style.cursor = "not-allowed";
 		}
 }
 //减号效果
 minus.onclick = function(){
 	var n = parseInt(num.value);
 	if(n>1&&n<200){
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
 	}
 //键盘松开数字的处理
 num.onkeyup = function(){
 	var n= num.value;
 	n1 = n.replace(/\D/g,"")?n.replace(/\D/g,""):1;
 	num.value = n1<200?n1:199;
 	if(num.value==1){
 		minus.disabled = true;
 		minus.style.cursor = "not-allowed"
 	}else{
 		inus.disabled = false;
 		minus.style.cursor = "pointer"
 	}
 	if(num.value==199){
 		plus.disabled = true;
 		plus.style.cursor = "not-allowed"
 	}else{
 		plus.disabled = false;
 		plus.style.cursor = "pointer"
 	}
 }
 



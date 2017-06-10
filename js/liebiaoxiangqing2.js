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
    
//倒计时
var _left0 = document.getElementById("time0");
var _left1 = document.getElementById("time1");
var _left2 = document.getElementById("time2");
var _left3 = document.getElementById("time3");
var _left4 = document.getElementById("time4");
var _left5 = document.getElementById("time5");
var _left6 = document.getElementById("time6");
var _left7 = document.getElementById("time7");
var _left8 = document.getElementById("time8");
var _left9 = document.getElementById("time9");

var limited=document.getElementById("limited");
function calcLeftTime(){
	var d3 = new Date(2017,5,15);
	var d4 = new Date();
	var d6 = new Date(2017,6,"+d4.getDate()+",1);
	var d7 = new Date(2017,6,"+d4.getDate()+",2);
	var d8 = new Date(2017,6,"+d4.getDate()+",3);
//	var d6 = new Date(2017,2,11,9);
//	var d7 = new Date(2017,2,11,16);
	var leftTime = parseInt((d3.getTime()-d4.getTime())/1000);
	if(leftTime>0){
		var hours = parseInt(leftTime/3600);
		var minutes = parseInt(leftTime%3600/60);
		var seconds = leftTime%60;
		_left0.innerHTML ="剩余"+" "+ changeNum(hours)+": "+changeNum(minutes)+": "+changeNum(seconds);
		_left1.innerHTML ="剩余"+" "+ changeNum(hours)+": "+changeNum(minutes)+": "+changeNum(seconds);
		_left2.innerHTML ="剩余"+" "+ changeNum(hours)+": "+changeNum(minutes)+": "+changeNum(seconds);
		_left3.innerHTML ="剩余"+" "+ changeNum(hours)+": "+changeNum(minutes)+": "+changeNum(seconds);
		_left4.innerHTML ="剩余"+" "+ changeNum(hours)+": "+changeNum(minutes)+": "+changeNum(seconds);
		_left5.innerHTML ="剩余"+" "+ changeNum(hours)+": "+changeNum(minutes)+": "+changeNum(seconds);
		_left6.innerHTML ="剩余"+" "+ changeNum(hours)+": "+changeNum(minutes)+": "+changeNum(seconds);
		_left7.innerHTML ="剩余"+" "+ changeNum(hours)+": "+changeNum(minutes)+": "+changeNum(seconds);
		_left8.innerHTML ="剩余"+" "+ changeNum(hours)+": "+changeNum(minutes)+": "+changeNum(seconds);
		_left9.innerHTML ="剩余"+" "+ changeNum(hours)+": "+changeNum(minutes)+": "+changeNum(seconds);
		if((d4.getHours()<=d6.getHours())&&(d4.getHours()>=d7.getHours())){
			limited.style.display="none";
		}
	}else{
		clearInterval(t1);
		_left0.innerHTML = "计时已结束";
		_left1.innerHTML = "计时已结束";
		_left2.innerHTML = "计时已结束";
		_left3.innerHTML = "计时已结束";
		_left4.innerHTML = "计时已结束";
		_left5.innerHTML = "计时已结束";
		_left6.innerHTML = "计时已结束";
		_left7.innerHTML = "计时已结束";
		_left8.innerHTML = "计时已结束";
		_left9.innerHTML = "计时已结束";

	}
}
calcLeftTime();

var t1 = setInterval(function(){
	calcLeftTime();
},1000);

function changeNum(num){
	return num>=10?num:"0"+num;
}

$(function(){
	if(getCookie("userName")!=""){
		$("#welcomex").css("display","none");
$("#welcomey").css({"display":"block","margin-left":"30px","margin-right":"200px","width":"200px","float":"left"}); 
        $("#cook").html(getCookie("userName"));
	}
        ////document.close(removeCookie("userName"));
        $("#zhuxiao").click(function(){
        	removeCookie("userName");  
    	$("#welcomex").css("display","block");
 	$("#welcomey").css({"display":"none","margin-left":"30px","margin-right":"200px","width":"200px","float":"left"}); 
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
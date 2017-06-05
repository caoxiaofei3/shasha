
//	轮播图
	var oImg = document.getElementById("Img");
	var oWrap = document.getElementById("wrap");
	var oLi = document.getElementById("list").getElementsByTagName("li");
	var timer;
	//	自动轮播
	var m = 0;  //当前第几张
	function autoPlay(){
		timer = setInterval(function(){
			m++;
			if(m==9){
				m =0;
			}
			for(var i=0;i<oLi.length;i++){
				oLi[i].className = "";
			}
			oLi[m].className = "active";
			oImg.src = "img/shouye-img/"+m+".jpg";
		},1000)
	}
	autoPlay();
	//	鼠标移上停止移开自动执行
	oWrap.onmouseover = function(){
		clearInterval(timer);
	}
	oWrap.onmouseout = function(){
		autoPlay();
	}
	//	下面按钮的点击（鼠标移上）
	for(var i=0;i<oLi.length;i++){
		oLi[i].index = i; //记录索引值
		oLi[i].onmouseover = function(){
			for(var j=0;j<oLi.length;j++){
				oLi[j].className = "";
			}
			this.className = "active";
			oImg.src = "img/shouye-img/"+m+".jpg";
			m = this.index;
		}
	}
	
/********纵向轮播***************/
function s(){
	var i=-1;
	
	 // auto play 
    function autoScroll(){ 
       setInterval(function(){ 
            i++; 
           //console.log(i);
            moveTit(i); 
        }, 2000); 
  
    } 
    function moveTit(num){
    	 if(i==3){
					i=1;
					$('#wrap-bottom ul').css({top:0});
				}
    	$('#wrap-bottom ul').stop().animate({top:i*-29+"px"},400);
    }
    autoScroll();
					
}
s();




//倒计时
var _left0 = document.getElementById("time0");
var _left1 = document.getElementById("time1");
var _left2 = document.getElementById("time2");
var _left3 = document.getElementById("time3");
var _left4 = document.getElementById("time4");
var limited=document.getElementById("limited");
function calcLeftTime(){
	var d3 = new Date(2017,5,10);
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

	}
}
calcLeftTime();

var t1 = setInterval(function(){
	calcLeftTime();
},1000);

function changeNum(num){
	return num>=10?num:"0"+num;
}

//楼层索引
    $(function(){
    	$(window).scroll(function () {
	       if($(window).scrollTop()<=0){		       		
	       		$("#Fixed2").css({position:"fixed",top:840,left:0,"z-index":9999});
	       }else{
	       		$("#Fixed2").css({position:"fixed",top:100,left:0});
	       }
		});
		function getId(str){
			return document.getElementById(str)
		}

		var oLix=getId("Fixed2").getElementsByTagName("li");
		window.onscroll = function(){
			 scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			 clientHeight=document.documentElement.clientHeight || document.body.clientHeight;
			for (var i = 0; i < oLix.length; i++) {
				oLix[i].index=i;
				oLix[i].onmouseover= function(){
					for(var j=0;j<oLix.length;j++){
						oLix[j].className = "";
					}
					this.className = "activem";
					if(i==3){
						document.body.scrollTop=scrollTop;
					}else{
						document.body.scrollTop=(scrollTop+clientHeight)*i/4;
					}
					
				}
			}
		}
    })

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
				
		//全部品牌下拉菜单*
		$("#textX").mouseenter(function(){
			$("#Fixed4").css({"display":"block"});
		});
		$("#Fixed4").mouseleave(function(){
			$(this).css({"display":"none"});
		});
		
    });		
    


$(function(){
	if(getCookie("userName")!=""){
		$("#welcomex").css("display","none");
$("#welcomey").css({"display":"block","margin-left":"30px","margin-right":"200px","width":"200px","float":"left"});
        
        $("#cook").html(getCookie("userName"));
	}
        document.close(removeCookie("userName"));
});

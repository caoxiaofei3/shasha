
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
var _left0 = document.getElementById("left-time0");
var _left1 = document.getElementById("left-time1");
var _left2 = document.getElementById("left-time2");
var _left3 = document.getElementById("left-time3");
var limited=document.getElementById("limited");
function calcLeftTime(){
	var d3 = new Date(2017,2,20,9);
	var d4 = new Date();
	var d6 = new Date(2017,2,"+d4.getDate()+",9);
	var d7 = new Date(2017,2,"+d4.getDate()+",16);
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
		if((d4.getHours()<=d6.getHours())&&(d4.getHours()>=d7.getHours())){
			limited.style.display="none";
		}
	}else{
		clearInterval(t1);
		_left0.innerHTML = "计时已结束";
		_left1.innerHTML = "计时已结束";
		_left2.innerHTML = "计时已结束";
		_left3.innerHTML = "计时已结束";

	}
}
calcLeftTime();

var t1 = setInterval(function(){
	calcLeftTime();
},1000);

function changeNum(num){
	return num>=10?num:"0"+num;
}
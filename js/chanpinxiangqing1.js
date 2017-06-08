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
$(function(){
	$.get("php/getGoodsInfo.php",{goodsId:getCookie("goodId")},function(data){	
	var data=eval('('+data+')');
	console.log(data);
	console.log(data.goodsImg);
	$("#subcony2").append('<p><a>'+data.goodsName+'</a></p><p><span><a>遮瑕</a></span><span><a>保湿</a></span><span><a>控油</a></span><span><a>均匀肤色</a></span><span><a>修饰毛孔</a></span><span><a>防晒</a></span></p><p><span>￥'
+data.goodsPrice+'</span><span>市场价￥'+data.beiyong1+'</span><span>8折</span></p><p><span><a>送赠品</a></span><span>可免费或赠品F/G:PLAYBOY WITH SEXY BODY MIST</span><span>(已送完)</span></p><p><span>直降 </span><span>已优惠￥13.0</span></p><p><span>订单促销 </span><span>满￥249包邮</span></p><p><span>评分</span><span>★★★★★</span><span>(1人评分)</span></p><p><span>颜色：<img src="img/shangpinxiangqing-img/11.jpg" /><img src="img/shangpinxiangqing-img/12.jpg" /></span><br/><span id="sp2">数量：<input type="button" value="-" id="minus" /><input type="text" value="1" id="num"/><input type="button" value="+" id="plus" /></span><br/><span id="sp3"style="cursor:pointer"><a>加入购物车</a></span></p><p><span><a>收藏</a></span><span><a>分享到</a></span><span><img src="img/shangpinxiangqing-img/13.jpg" /><img src="img/shangpinxiangqing-img/14.jpg" /><img src="img/shangpinxiangqing-img/15.jpg" /><img src="img/shangpinxiangqing-img/16.jpg" /><img src="img/shangpinxiangqing-img/17.jpg" /><img src="img/shangpinxiangqing-img/18.jpg" /></span></p>');
    new ShowGoods({
		boxId:"subcony1",
		boxWidth:540,
		boxHeight:630,
		times:2,
		imgArr:[data.beiyong3,data.beiyong4,data.beiyong5,data.beiyong6],
		imgWidth:380,
		imgHeight:380,
		zoomColor:'yellow',
		zoomWidth:150,
		zoomHeight:150,
		listWidth:100,
		listHeight:100,
		listBorderColor:'#AAA',      //边框颜色
		listBorderHeighColor:'red',
		listSpace:5,                 //间距
		listNum:4,
		btnWidth:20,
		btnColor:'black',
		btnFontSize:30,
		btnFontColor:'white',
		btnFontHeighColor:'red'
	})
	});
	//同步变异步
	setTimeout(function(){
		console.log("这是func1函数的异步操作代码");
		f1();
		f2();
	},2000);
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

//购物车数量
function f1(){
	var minus =document.getElementById("minus");
var num =document.getElementById("num");
var plus =document.getElementById("plus");
 //加号点击
 plus.onclick=function(event){
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
 minus.onclick = function(event){
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
 num.onkeyup = function(event){
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
 
 
}
 
//放大镜
function ShowGoods(json){
	this.boxId="#"+json.boxId;
	this.boxWidth=json.boxWidth;
	this.boxHeight=json.boxHeight;
	this.times=json.times;
	this.imgArr=json.imgArr;
	this.imgWidth=json.imgWidth;
	this.imgHeight=json.imgHeight;
	this.zoomColor=json.zoomColor;
	this.zoomWidth=json.zoomWidth;
	this.zoomHeight=json.zoomHeight;
	this.listWidth=json.listWidth;
	this.listHeight=json.listHeight;
	this.listBorderColor=json.listBorderColor;
	this.listBorderHeighColor=json.listBorderHeighColor;
	this.listSpace=json.listSpace;	
	this.listNum=json.listNum;
	this.btnWidth=json.btnWidth;
	this.btnColor=json.btnColor;
	this.btnFontSize=json.btnFontSize;
	this.btnFontColor=json.btnFontColor;
	this.btnFontHeighColor=json.btnFontHeighColor;
	this.distance=0;
	this.nextTimer=null;
	this.previousTimer=null;
	if(typeof this.initUI!="function"){
		ShowGoods.prototype.initUI=function(){
			$(this.boxId).css({position:'relative',height:this.boxHeight+'px',width:this.boxWidth+'px'});
			var str="<div style='width:"+this.imgWidth+"px;height:"+this.imgHeight+"px;padding-bottom:"+(this.boxWidth-this.imgWidth-this.listHeight)+"px;margin-left:auto;margin-right:auto;position:relative'><img src="+this.imgArr[0]+" style='width:"+this.imgWidth+"px;height:"+this.imgHeight+"px'/>";
			str+="<div style='width:"+this.zoomWidth+"px;height:"+this.zoomHeight+"px;background:yellow;opacity:.3;cursor:move;position:absolute;top:0;left:0;display:none'></div></div>";
			str+="<div style='width:"+this.imgWidth+"px;height:"+this.imgHeight+"px;display:none;position:absolute;top:0;left:"+this.boxWidth+"px;overflow:hidden'><img src="+this.imgArr[0]+" style='position:absolute;width:"+this.imgWidth*this.times+"px;height:"+this.imgHeight*this.times+"px'/></div>";
			str+="<div style='position:relative;overflow:hidden;width:"+((this.listWidth+this.listSpace)*this.listNum-this.listSpace)+"px;height:"+this.listHeight+"px;margin:0 auto'>";
			str+="<ul style='position:absolute;top:0;left:0;width:"+((this.listWidth+this.listSpace)*this.imgArr.length)+"px;height:"+this.listHeight+"px'>";
			for(var i=0;i<this.imgArr.length;++i){
				str+="<li style='box-sizing:border-box;border:2px solid"+ this.listBorderColor+";width:"+this.listWidth+"px;height:"+this.listHeight+"px;margin-right:"+this.listSpace+"px;list-style:none;float:left;'><img src="+this.imgArr[i]+" style='width:100%;height:100%'/></li>"
			}
			str+="</ul>";
			str+="<input type='button' style='position:absolute;cursor:pointer;background:"+this.btnColor+";opacity:.5;border:none;width:"+this.btnWidth+"px;height:"+this.listHeight+"px;top:0;left:0px;color:"+this.btnFontColor+";font-size:"+this.btnFontSize+"px;outline:none' value='\<'/>"
			str+="<input type='button' style='position:absolute;cursor:pointer;background:"+this.btnColor+";opacity:.5;border:none;width:"+this.btnWidth+"px;height:"+this.listHeight+"px;top:0;left:"+((this.listWidth+this.listSpace)*this.listNum-this.listSpace-this.btnWidth)+"px;color:"+this.btnFontColor+";font-size:"+this.btnFontSize+"px;outline:none' value='\>'/>"
			str+="</div>";
			$(this.boxId).append(str)
		}
		ShowGoods.prototype.addEvent=function(){
			var that=this;
			$(this.boxId+" input:eq(1)").on({
				click:function(){
					var left=Math.round(parseFloat($(that.boxId).find('ul').css('left')));
					if(left%(that.listWidth+that.listSpace)!=0)return
					function next(){
						var nowLeft = Math.round(parseFloat($(that.boxId).find('ul').css('left')));
						that.distance=(left-that.listWidth-that.listSpace-nowLeft)/2;
						that.distance = that.distance>0?Math.ceil(that.distance):Math.floor(that.distance);
						if(nowLeft+that.distance<=-(that.imgArr.length-that.listNum)*(that.listWidth+that.listSpace)+that.listSpace){
							$(that.boxId).find('ul').css('left',(-(that.imgArr.length-that.listNum)*(that.listWidth+that.listSpace))+'px');
							$(that.boxId+" input:eq(1)").css('color',that.btnFontColor);//这里this指向的是that因为setTimeout里用bind绑定到了that
							return
						}
						$(that.boxId).find('ul').css('left',nowLeft+that.distance+'px');
						if(nowLeft+that.distance==left-that.listWidth-that.listSpace)return			
						setTimeout(next.bind(that),50)	
					}
					next()
				},
				mouseover:function(){
					if(Math.round(parseFloat($(that.boxId).find('ul').css('left')))<=-(that.imgArr.length-that.listNum)*(that.listWidth+that.listSpace)+that.listSpace){
						return
					}
					$(this).css('color',that.btnFontHeighColor)
					},
					mouseout:function(){
						$(this).css('color',that.btnFontColor)
					}
				});
			$(this.boxId+" input:eq(0)").on({
				click:function(){
					var left=Math.round(parseFloat($(that.boxId).find('ul').css('left')));
					if(left%(that.listWidth+that.listSpace)!=0)return
					function previous(){
						var nowLeft = Math.round(parseFloat($(that.boxId).find('ul').css('left')));
						that.distance=(left+that.listWidth+that.listSpace-nowLeft)/2;
						that.distance = that.distance>0?Math.ceil(that.distance):Math.floor(that.distance);
						if(nowLeft+that.distance>=0){
							$(that.boxId).find('ul').css('left',0+'px');
							$(that.boxId+" input:eq(0)").css('color',that.btnFontColor);	
							return
						}	
						$(that.boxId).find('ul').css('left',nowLeft+that.distance+'px');
						if(nowLeft+that.distance==left+that.listWidth+that.listSpace)return
						setTimeout(previous.bind(that),50)	
					}
					previous()
				},
					mouseover:function(){
						if(Math.round(parseFloat($(that.boxId).find('ul').css('left')))>=0){
							return
						}
						$(this).css('color',that.btnFontHeighColor)
					},
					mouseout:function(){
						$(this).css('color',that.btnFontColor)
					}			
				});
			$(this.boxId+" ul").on({
				mouseover:function(){
					$(this).css('borderColor',that.listBorderHeighColor)
				},
				mouseout:function(){
					$(this).css('borderColor',that.listBorderColor)
				},	
				click:function(){
					$(that.boxId+">div:eq(0)>img").attr('src',$(this).children('img').attr('src'));
					$(that.boxId+">div:eq(1)>img").attr('src',$(this).children('img').attr('src'));
				}
			
			},'li');
			$(this.boxId+" div:eq(0)").on({
				mouseenter:function(){
					$(this).children('div').css('display','block');
					$(this).next().css('display','block');
				},
				mousemove:function(e){
					var offsetLeft=$(this).offset().left;
					var offsetTop=$(this).offset().top;
					var X=e.pageX-that.zoomWidth/2-offsetLeft;
					var Y=e.pageY-that.zoomHeight/2-offsetTop;
					X = X < 0 ? 0 : X;
					Y = Y < 0 ? 0 : Y;
					X = X > that.imgWidth-that.zoomWidth?that.imgWidth-that.zoomWidth:X;
					Y = Y > that.imgHeight-that.zoomHeight?that.imgHeight-that.zoomHeight:Y;		
					$(this).children('div').css({left:X+'px',top:Y+'px'});
					var bX=X*that.times;
					var bY=Y*that.times;
					if(that.times*that.imgWidth-bX<=that.imgWidth){
						bX=that.times*that.imgWidth-that.imgWidth;
					}
					if(that.times*that.imgHeight-bY<=that.imgHeight){
						bY=that.times*that.imgHeight-that.imgHeight;
					}
					$(this).next().children().css({left:-bX+'px',top:-bY+'px'});	
				},					
				mouseleave:function(){
					$(this).children('div').css('display','none');
					$(this).next().css('display','none');
				}
			});
		}	
	}
	this.initUI();
	this.addEvent();
}
//添加购物车
function f2(){
	$("#sp3").click(function(){
	  if(getCookie("userName")!=""){
	  	$.get("php/addShoppingCart.php",{vipName:getCookie("userName"),goodsId:getCookie("goodId"),goodsCount:$("#num").val()},function(data){
	  		if(data=="1"){
	  			var t = window.confirm("添加成功，是否跳转到购物车？");
	    if(t){
		window.location.href="gouwuche1.html";
	    }
	  		}else{
	  			alert("添加失败");
	  		}
	  	
		});	
	  }else{
	  	alert("请您先登录!");
	  }
    });
	
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
    }
});
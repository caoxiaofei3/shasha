//账号 密码

var a=false;
var b=false;
var c=false;
document.getElementById("txt").onblur=function(){
        var reg=/^1[34578]\d{9}$/;
       var str=document.getElementById("txt").value;
	   if(reg.test(str)){
	      document.getElementById("msg").innerHTML="√";
		
		  a=true;
	   }else{
	      a=false; 
	      document.getElementById("msg").innerHTML="×";                                                            
	   }
    } 
//登录密码验证；由6-20个数字或字母组成;
   document.getElementById("pwd").onblur=function(){
       var reg = /^[A-z]\w{5,19}$/;
       var str=document.getElementById("pwd").value;
	   if(reg.test(str)){ 
        b=true;	   
	      document.getElementById("sp1").innerHTML="√";
	   }else{
	   b=false;
	       document.getElementById("sp1").innerHTML="×";                                                           
	   }
    } 

//验证码验证
	var num="";
	function testF(){
	    var arr=[];
		var str="";	
		for(var i=49;i<=57;i++){
		    arr.push(i);
		}
		for(var i=65;i<=90;i++){
		    arr.push(i);
		}
		for(var i=97;i<=122;i++){
		    arr.push(i);
		}	
        num="";
		for(var j=1;j<=4;j++){
		    var index=parseInt(Math.random()*arr.length);
		    str=str+"<img src='img/denglu-img/"+arr[index]+".jpg'/>";
			 num=num+String.fromCharCode(arr[index]).toLowerCase();		 
	 	}	
	   document.getElementById("sp2").innerHTML=str;
	}
	function sum1(){
	    var num1=document.getElementById("yzm").value.toLowerCase();
		if(num==num1){
			c=true;
		    document.getElementById("sp3").innerHTML="√";
		}else{
		    c=false;
		    document.getElementById("sp3").innerHTML="×";
		   }
	}
function denglu666(){
    if(a&b&c){
        alert("正确");
	}else{
	    alert("出账号或者密码格式有误");
	}
	
}
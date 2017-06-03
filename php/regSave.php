<?php 
	
	$id = $_POST['uesrname'];
	$pass = $_POST['uesrpass'];
    header("Content-type","text/html;charset=utf-8");
    //1、建立连接（搭桥）
    $conn = mysql_connect("localhost:3306","root","qianfeng");
	//2、选择数据库
	mysql_select_db("lixiang1702",$conn);
	
	//3、执行SQL语句
	
	$sqlStr ="insert into shazhucedata(id,pass) values('".$id."','".$pass."')";
	mysql_query($sqlStr,$conn);
	//4、关闭数据库
	mysql_close($conn);
	echo "注册成功！<a href='../denglu1.html'>进入主页</a>";
?>

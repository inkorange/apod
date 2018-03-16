<?php
$env = "EXDEV";

if($env === "EXDEV") {
   $myServer = "127.0.0.1";
   $myUser = "animatic";
   $myPass = "sgasj2354uif";
}
if($env === "WEST") {
    $myServer = "127.0.0.1";
    $myUser = "root";
    $myPass = "root";
}
if($env === "LOCAL") {
    $myServer = "localhost";
    $myUser = "animatic";
    $myPass = "animatic_901";
}
if($env === "PROD") {
    $myServer = "mysqlcluster18.registeredsite.com";
    $myUser = "animatic516";
    $myPass = "Amedia97";
}

$myDB = "animatic";

$connection = mysqli_connect($myServer, $myUser, $myPass, $myDB);
if(!$connection) {
	echo "could not connect";
} else {
    //echo "connected.";
}
?>

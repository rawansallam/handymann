<?php

$firstname=$_REQUEST['firstname'];
$lastname=$_REQUEST['lastname'];
$email=$_REQUEST['email'];
$number=$_REQUEST['phonenumber'];
$subject=$_REQUEST['yoursubject'];
$address=$_REQUEST['youraddress'];
$massage=$_REQUEST['yourmassage'];



if(isset($_POST['sumb']))
{
    $host="localhost";
    $user="root";
    $db= "handyman project";
    $password="";

   $conn = mysqli_connect($host,$user,$password,$db);

   $insert="insert into `handyman project` values('$firstname', '$lastname','$email','$number','$subject','$address','$massage')";
   mysqli_query($conn,$insert);

   if($conn){
    echo("<h1 style='color:green;'>your Request is Done!</h1>");
   }
   else{
    echo("<h1 style='color:red;'>your Request is Falid!</h1>");
   }

}





?>


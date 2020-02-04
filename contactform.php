<?php
if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['messgae'];

  $to='neeraj@flipr.ai';
  $subject='Form Submission'
  $message="Name: ".$name."\n". "wrote the following:"."\n\n".$message;
  $headers="Form: ".$email;
  if(mail($to, $subject, $message, $headers)){
    echo "<h1>Sent Successfully! Thank You"."".$name.", We will contact shortley!</h1>";
  }else{

  echo "somethint went wrong!";
  }
}
?>
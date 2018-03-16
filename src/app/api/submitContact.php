<?php
$payload = json_decode(file_get_contents("php://input"),true);
$message = $payload['message'];
$firstname = $payload['firstname'];
$lastname = $payload['lastname'];
$company = $payload['company'];
$address = $payload['address'];
$state = $payload['state'];
$city = $payload['city'];
$email = $payload['email'];
$name = $firstname . " " . $lastname;
ini_set("SMTP", "sub5.mail.dreamhost.com");

// recipient **********************
$recipient = "contact@midatlanticss.com";


// BODY ***************************
$messageBody = "<div style=\"width: 75%; margin: 20px auto; box-shadow: 0 0 5px #ccc; background-color: e4e4e4; border: solid 5px white; padding: 10px 20px 20px 20px; font: 15px helvetica, sans-serif; \">";
$messageBody .= "<p><img src=\"http://beta.midatlanticss.com/images/MASS_Logo.png\" style=\"height: 75px\" /></p>";
$messageBody .= "<h3 style=\"border-top: 2px solid #00445e; padding-top: 20px;\">Website generated contact email</h3>";
$messageBody .= "<p>Sender: " . $firstname . " " . $lastname . "</p>";
$messageBody .= "<p>Email: " . $email . "</p>";
$messageBody .= "<p>Company: " . $company . "</p>";
if($address !== "" || $city !== "" || $state !== "") {
    $messageBody .= "<p>Address: " . $address . ", " . $city . " " . $state . "</p>";
}
$messageBody .= "<p>Message: " . $message . "</p>";
$messageBody .= "</div>";
$messageBody = str_replace("\'", "&#39;", $messageBody);
$messageBody = wordwrap($messageBody, 70);

$subject = "MASS Online Contact Form Submission";

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
//$headers .= "To: " . $recipient . "\r\n";
//$headers .= "Cc: thrillgraphics@gmail.com\r\n";
$headers .= "From: contact@midatlanticss.com"; // . $name . " <" . $email . ">\r\n";

$success = mail($recipient, $subject, $messageBody, $headers); //mail command
/* --------------------------------------------------------------------------------- */

if($success) {
	echo "{\"success\": \"Thank you for your submission.\"}";
}

$error = error_get_last();
//echo $error["message"];
?>

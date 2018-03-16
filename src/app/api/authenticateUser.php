<?php

if($isAuthenticated) {
    $_SESSION['email']=$email;
    $_SESSION['userid']=$userid;
    $_SESSION['firstname']=$fname;
    $_SESSION['lastname']=$lname;
    $_SESSION['company']=$company;
    $_SESSION['phone']=$phone;
    $_SESSION['logged_in']=true;
    $sessionsql = "UPDATE users SET session = '" . session_id() . "', logindate=now() WHERE email='".$email."' AND password='" . $password ."'";
    $sessionresult = mysqli_query($connection, $sessionsql);
}

//setting the header: 'alg' => 'HS256' indicates that this token is signed using HMAC-SHA256
$header = [
                'typ' => 'JWT',
                'alg' => 'HS256'
      ];
$header = json_encode($header);
$header = base64_encode($header);

$payload = [
                'userid' => $userid,
                'phone' => $phone,
                'firstname' => $fname,
                'lastname' => $lname,
                'email' => $email,
                'company' => $company,
      ];

$payload = json_encode($payload);
$payload = base64_encode($payload);

$signature = hash_hmac('sha256','$header.$payload', "", true);
$signature = base64_encode($signature);
$token = "$header.$payload.$signature";

echo "{";
echo    "\"isAuthenticated\":" . ($isAuthenticated ? "true" : "false") . ",";
echo    "\"token\":\"" . ($isAuthenticated ? $token : "") . "\",";
echo    "\"session\":\"" . ($isAuthenticated ? session_id() : "") . "\"";
echo "}";

?>
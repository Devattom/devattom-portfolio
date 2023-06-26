<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mailConf = new PHPMailer(true);


try {
    if(isset($_POST['submitBtn'])) {
        if(isset($_POST['lastname']) && isset($_POST['firstname']) && isset($_POST['email']) && isset($_POST['message'])) {
                if(!empty($_POST['lastname']) && ctype_alpha($_POST['lastname'])){
                    $lastname = htmlspecialchars($_POST['lastname']);
                    echo $lastname;
                } else {
                    throw new Exception('Bad data');
                }
                if(!empty($_POST['firstname']) && ctype_alpha($_POST['firstname'])){
                    $firstname = htmlspecialchars($_POST['firstname']);
                    echo $firstname;
                } else {
                    throw new Exception('Bad data');
                }
                if(!empty($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
                    $email = htmlspecialchars($_POST['email']);
                    echo $email;
                }else {
                    throw new Exception('Bad data');
                }
                
                if(!empty($_POST['message'])) {
                    $message = htmlentities($_POST['message']);
                    echo $message;
                }else {
                    throw new Exception('Bad data');
                }
      
        }
    
    }
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'devattom@gmail.com';                     //SMTP username
    $mail->Password   = 'password';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($email, $lastname);
    $mail->addAddress('devattom@gmail.com', 'Tom');     //Add a recipient
    $mail->addReplyTo($email, $lastname);


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Demande de contact';
    $mail->Body    = 'Expéditeur : ' . $email . '<br>'. 
                     'Nom Prénom:' . ' ' .  $lastname. ' ' . $firstname . '<br>' . 'Message : '. '<br>' . $message;

    

    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mailConf->isSMTP();                                            //Send using SMTP
    $mailConf->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mailConf->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mailConf->Username   = 'devattom@gmail.com';                     //SMTP username
    $mailConf->Password   = 'password';                               //SMTP password
    $mailConf->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mailConf->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mailConf->setFrom('devattom@gmail.com', 'Thomas');
    $mailConf->addAddress($email, $lastname);     //Add a recipient


    //Content
    $mailConf->isHTML(true);                                  //Set email format to HTML
    $mailConf->Subject = 'Confirmation';
    $mailConf->Body    = 'Bonjour ' . $firstname . ',' . '<br>' . 'Je vous confirme la prise en compte de votre demande de contact et je reviendrai vers vous au plus vite.' . '<br>' . 'Cordialement' . '<br>' . 'Rousselin Thomas';

    if($mail->send() && $mailConf->send()){
        header('location: ./confirmation.html');
    }
    
} catch (Exception $e) {
    header('location: ./error.html');
}




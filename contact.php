<?php
    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $content=$_POST['content'];
    $to= 'contacto@phaway.pe';
    if(!is_null($name) && !is_null($email) && !is_null($subject) && !is_null($content) ){
        $encoding = "utf-8";
        $subject_preferences = array(
                "input-charset" => $encoding,
                "output-charset" => $encoding,
                "line-length" => 76,
                "line-break-chars" => "\r\n"
            );
        $header = "Content-type: text/html; charset=".$encoding." \r\n";
        $header .= "From: ".$name." <".$email."> \r\n";
        $header .= "MIME-Version: 1.0 \r\n";
        $header .= "Content-Transfer-Encoding: 8bit \r\n";
        $header .= "Date: ".date("r (T)")." \r\n";
        $header .= iconv_mime_encode("Subject", $subject, $subject_preferences);

        mail($to, $subject, $content, $header);
        header("Location: http://www.phaway.pe", true, 301);
        exit();
        
    }

?>
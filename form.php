<?php
$msg = "Заявка с формы gembl-hub.net\n";
$msg .= "Имя: ". $_REQUEST['name'] . "\n";
$msg .= "Емейл: ". $_REQUEST['email'] . "\n";
$msg .= "Сообщение: ". $_REQUEST['comment'] . "\n";

send_tg_msg($msg, 51337503);
send_tg_msg($msg, 642707493);



function send_tg_msg($msg, $tgid) {
        $token="6060960614:AAEoR8QxvT8t2YXcVowIrEDLbQtqZmx-1I4";
        $msg = urlencode($msg);
        $msg = "https://api.telegram.org/bot$token/sendMessage?chat_id=$tgid&text=". $msg;

        file_get_contents($msg);

}

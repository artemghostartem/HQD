<?php

/* https://api.telegram.org/bot758382664:AAE0U8zYoAw2rikLO_Q_006P5jilBumZSN4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$blueberry = $_POST['golubika'];
$strawberry = $_POST['klubnika'];
$pienapple = $_POST['myata'];
$mite = $_POST['ananas'];

$token = "1413574047:AAGdYU2waomx4N4u8ctSGM06wqOpDxSumI4";
$chat_id = "-412533262";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Голубика: ' => $blueberry,
  'Клубника: ' => $strawberry,
  'Ананас: ' => $pienapple,
  'Мята: ' => $mite,

);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
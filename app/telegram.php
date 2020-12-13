<?php

/* https://api.telegram.org/bot758382664:AAE0U8zYoAw2rikLO_Q_006P5jilBumZSN4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$mango = $_POST['mango'];
$strawberry = $_POST['strawberry'];
$tobacco = $_POST['tobacco'];
$Blueberry = $_POST['Blueberry'];
$cola = $_POST['cola'];
$peach = $_POST['peach'];
$gum = $_POST['gum'];
$mint = $_POST['mint'];
$mixed = $_POST['mixed'];
$grapey = $_POST['grapey'];


$token = "1413574047:AAGdYU2waomx4N4u8ctSGM06wqOpDxSumI4";
$chat_id = "-412533262";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Манго: ' => $mango, 
  'Клубника: ' => $strawberry,
  'Мускат: ' => $tobacco,
  'Голубика: ' => $Blueberry,
  'Кола со льдом: ' => $cola,
  'Персик: ' => $peach,
  'Жевачка: ' => $gum,
  'Мята: ' => $mint,
  'Фруктовый микс: ' => $mixed,
  'Виноград: ' => $grapey,
);

foreach($arr as $key => $value) {
  if (isset($value)) {
  	$txt .= "<b>".$key."</b> ".$value."%0A";
  }
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
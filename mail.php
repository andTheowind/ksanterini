<?php
require 'vendor/autoload.php';

$subject = isset($_POST['subject']) ? htmlspecialchars($_POST['subject']) : "Заявка с сайта";
$name = isset($_POST['name']) ? "Имя: ".htmlspecialchars($_POST['name'])."<br>\n" : "";
$phone = isset($_POST['phone']) ? "Телефон: ".htmlspecialchars($_POST['phone'])."<br>\n" : "";
$email = isset($_POST['email']) ? "E-mail: ".htmlspecialchars($_POST['email'])."<br>\n" : "";
$question = isset($_POST['question']) ? "Вопрос: ".htmlspecialchars($_POST['question'])."<br>\n" : "";
$choosen_questions = isset($_POST['choosen-questions']) ? "Выбранные вопросы: <br>\n".htmlspecialchars($_POST['choosen-questions'])."<br>\n" : "";
$services = isset($_POST['services']) ? "Выбранные услуги: <br>\n".htmlspecialchars($_POST['services'])."<br>\n" : "";

$body = "<h2>$subject</h2>\n
$name
$phone
$email
$question
$choosen_questions
$services
";

$uploaddir = __DIR__ . '/cache/';
$uploadfile = $uploaddir . basename($_FILES['userFile']['name']);

if (move_uploaded_file($_FILES['userFile']['tmp_name'], $uploadfile)) {
	$attachment = $uploadfile;
	$body .= "<br>\n
	Файл во вложении<br>\n";
} else
	$attachment = false;

// Create the mail transport configuration
$transport = Swift_MailTransport::newInstance();

// Create the message
$message = Swift_Message::newInstance();
$message->setTo(array(
  "aq@ksanterini.by" => "Ksanterini",
));
$message->setSubject("Заявка с сайта");
$message->setBody($body, 'text/html');
$message->setFrom('aq@ksanterini.by', '');

// Attachment
if ($attachment) {
	$message->attach(Swift_Attachment::fromPath($attachment));
}

// Send the email
$mailer = Swift_Mailer::newInstance($transport);
$mailer->send($message);


if(file_exists($uploadfile)) {
  unlink($uploadfile);
}
?>
<?php
// ini_set('display_errors', 1); // Muestra errores en la salida
// ini_set('display_startup_errors', 1); // Muestra errores de inicio
// error_reporting(E_ALL); // Reporta todos los tipos de errores
// ... el resto de tu código PHP sigue aquí ...
// Permitir peticiones desde tu dominio React.
// Asegúrate de cambiar 'https://tudominio.com' por el dominio real donde está tu app React.
// Si estás desarrollando localmente con create-react-app en http://localhost:3000, puedes usar '*' temporalmente,
// PERO ES CRUCIAL CAMBIARLO A TU DOMINIO REAL EN PRODUCCIÓN por seguridad.
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow methods

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}, Content-Type"); // Allow headers

    exit(0);
}

header('Content-Type: application/json'); // Indica que la respuesta será JSON

// Incluir los archivos de PHPMailer. Ajusta la ruta si es necesario.
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// --- Configuración ---
$recipient_email = 'info@multigym.com.ar'; // La dirección a la que quieres recibir los emails
$sender_name_in_email = 'Formulario de Contacto'; // Nombre que aparecerá como remitente en el email

// Configuración SMTP (¡Usa los datos de TU cuenta de email en Hostinger!)
$smtp_host = 'smtp.hostinger.com'; // O el que te proporcione Hostinger
$smtp_username = 'info@multigym.com.ar'; // TU cuenta de email COMPLETA en Hostinger
$smtp_password = 'Reactnative25*'; // TU contraseña de email
$smtp_port = 465; // Normalmente 465 para SSL o 587 para TLS
$smtp_secure = 'ssl'; // Usa 'ssl' o 'tls' según la configuración de tu servidor

// --- Procesar la petición POST ---
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true); // Decodifica el JSON a un array asociativo

$response = array('success' => false, 'message' => '');

// Validar si los datos se recibieron correctamente
if ($data === null) {
    $response['message'] = 'Error al decodificar JSON.';
    echo json_encode($response);
    exit;
}

$name = isset($data['name']) ? htmlspecialchars(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? htmlspecialchars(strip_tags($data['email'])) : '';
$message = isset($data['message']) ? htmlspecialchars(strip_tags($data['message'])) : '';

// Validar campos obligatorios
if (empty($name) || empty($email) || empty($message)) {
    $response['message'] = 'Por favor, completa todos los campos.';
    echo json_encode($response);
    exit;
}

// Validar formato de email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = 'Formato de email inválido.';
    echo json_encode($response);
    exit;
}

// --- Enviar email con PHPMailer ---
$mail = new PHPMailer(true); // Pasar `true` habilita las excepciones

try {
    // Configuración del Servidor
    $mail->isSMTP();                                            // Enviar usando SMTP
    $mail->Host       = $smtp_host;                           // Servidor SMTP
    $mail->SMTPAuth   = true;                                   // Habilitar autenticación SMTP
    $mail->Username   = $smtp_username;                       // Nombre de usuario SMTP (tu email completo)
    $mail->Password   = $smtp_password;                       // Contraseña SMTP
    $mail->SMTPSecure = $smtp_secure;                           // Habilitar cifrado TLS o SSL
    $mail->Port       = $smtp_port;                             // Puerto SMTP

    // Remitente (El email que usas para autenticarte en SMTP)
    // A veces es útil que el "Reply-To" sea el email del usuario que llena el formulario
    $mail->setFrom($smtp_username, $sender_name_in_email);
    $mail->addReplyTo($email, $name); // Para que al responder, respondas al usuario

    // Destinatario (Tu email donde quieres recibir los mensajes)
    $mail->addAddress($recipient_email);

    // Contenido del Email
    $mail->isHTML(true);                                        // Habilitar formato HTML
    $mail->Subject = "Nuevo Mensaje de Contacto de {$name}";
    $mail->Body    = "
        <html>
        <head>
            <title>Nuevo Mensaje de Contacto</title>
        </head>
        <body>
            <h2>Mensaje del Formulario de Contacto</h2>
            <p><strong>Nombre:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Mensaje:</strong><br/>" . nl2br($message) . "</p>
        </body>
        </html>
    ";
    $mail->AltBody = "Nuevo Mensaje de Contacto:\n\nNombre: {$name}\nEmail: {$email}\nMensaje:\n{$message}"; // Versión texto plano

    $mail->send();

    $response['success'] = true;
    $response['message'] = 'Mensaje enviado con éxito.';

} catch (Exception $e) {
    // Capturar errores de PHPMailer
    $response['message'] = "Error al enviar el mensaje. Mailer Error: {$mail->ErrorInfo}";
    // Opcional: Loggear el error en el servidor
    error_log("Contact form error: " . $e->getMessage() . " - Mailer Error: " . $mail->ErrorInfo);
}

// Enviar la respuesta JSON al frontend
echo json_encode($response);

?>
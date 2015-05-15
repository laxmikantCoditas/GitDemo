<?php
    $raw  = '';
    $httpContent = fopen('php://input', 'r');
    
    while ($kb = fread($httpContent, 1024)) {
        $raw .= $kb;
    }
    $data = json_decode(stripslashes($raw));
    
    $success = ($data->name == 'Aaron');
    
    echo json_encode(array(
        'success' => $success,
        'data' => $data
    ));
?>
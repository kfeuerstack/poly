<?php
$server   = 'localhost';
$user     = 'Christopher';
$password = 'janelleyp00';
$db       = 'sampleDB';
$conn     = mysqli_connect($server, $user, $password, $db);
if(!$conn){
    die('Connection Failed:'. mysqli_connect_error());
}
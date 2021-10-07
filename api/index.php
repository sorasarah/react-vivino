<?php
header('Access-Control-Allow-Origin: *');

$pdo = new PDO('mysql:host=localhost;port=8888;dbname=vivino;charset=utf8', 'root', 'root'); /* N'oubliez pas ici de modifier en fonction de vos paramètres */
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

$req = $pdo->query("SELECT * FROM wines");
$datas = $req->fetchAll();

foreach ($datas as $data) {
    $data->id = (int)$data->id;
}

$json = json_encode($datas);

echo $json;

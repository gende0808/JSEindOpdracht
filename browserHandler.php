<?php
include "connection.php";

if(isset($_POST['search']) && isset($_POST['type'])){
    $search = $_POST['search'];
    $type = $_POST['type'];

//    $search = "apple";
//    $type = "wikipedia";


    $response = "";
    switch($type){
        case "wiki":
            echo wikipedia($search);
            break;
        case "rune":
            echo runescape($search, $connection);
            break;
    }
}

function runescape($search,PDO $connection){
    $stmt = $connection->prepare("SELECT * FROM item WHERE name LIKE :search ORDER BY cost DESC");
    $stmt->bindValue(":search","%".$search."%");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($result);
}

function wikipedia($search){
    $search = filter_var($search);
    $response = file_get_contents("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=".$search."&utf8=&format=json");
    $decoded_json = json_decode($response);
    return json_encode( $decoded_json->query);
}
function print_array($array){
    echo "<pre>";
    print_r($array);
    echo "</pre>";
}
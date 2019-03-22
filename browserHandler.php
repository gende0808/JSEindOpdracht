<?php

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
            echo runescape($search);
            break;
    }
}

function runescape($search){
    $base_url = "http://services.runescape.com/m=itemdb_oldschool";
    $item_url = "/api/catalogue/detail.json?item=";

    $response = file_get_contents($base_url . $item_url . $search);
    return $response;
}

function wikipedia($search){
    $response = file_get_contents("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=".$search."&utf8=&format=json");
    $decoded_json = json_decode($response);
    return json_encode( $decoded_json->query);
}
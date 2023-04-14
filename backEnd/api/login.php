<?php
    include "../dbConecttion.php";
    session_start();


    $json_string   =  file_get_contents("test.json");
    $_SESSION['message']= $json_string;
    $my_array_data = json_decode($json_string, TRUE);

    // foreach($my_array_data AS $data){
    //     $insert= $database->prepare("INSERT INTO products(id, title, price, category, description, image)
    //     VALUES (:id, :title, :price, :category , :description , :image)");

    //      $insert->bindParam("id",$data["id"]);
    //      $insert->bindParam("title",$data["title"]);
    //      $insert->bindParam("price",$data["price"]);
    //      $insert->bindParam("category",$data["category"]);
    //      $insert->bindParam("description",$data["description"]);
    //      $insert->bindParam("image",$data["image"]);

    //      $insert->execute();
    //         echo "OK";
    // }
?>
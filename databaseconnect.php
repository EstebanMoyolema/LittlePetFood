<?php
    $servername = "localhost";
    $database = "littlepetfood";
    $username = "root";
    $password = "";
    //Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);

    //Check connection
    if(!$conn){
        die("Connection failed: ".mysqli_connect_error());
    }
    echo "Connection established";
    mysqli_close($conn);
?>
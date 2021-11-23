<?php
    $servername = "localhost";
    $database = "littlepetfood";
    $username = "root";
    $password = "";
    //Create connection
    $conn = mysqli_connect($servername, $database, $username, $password);

    //Check connection
    if(!$conn){
        die("Connection failed: ".mysqli_connect_error());
    }
    echo "Connection established";
    mysqli_close($conn);
?>
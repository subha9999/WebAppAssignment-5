<?php

$task = $_POST['task'];
$dayOfWeek = $_POST['dayOfWeek'];


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "todolist";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO tasks (task_name, day_of_week) VALUES ('$task', '$dayOfWeek')";

if ($conn->query($sql) === TRUE) {
    echo "Task inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

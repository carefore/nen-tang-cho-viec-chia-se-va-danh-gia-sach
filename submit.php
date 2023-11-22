<?php
// Connect to MySQL
$mysqli = new mysqli("localhost", "username", "password", "book_platform");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Get data from POST request
$title = $_POST["title"];
$author = $_POST["author"];
$description = $_POST["description"];

// Insert data into the database
$query = "INSERT INTO books (title, author, description) VALUES ('$title', '$author', '$description')";
$result = $mysqli->query($query);

// Close connection
$mysqli->close();

// Return success status
echo json_encode(["status" => "success"]);
?>

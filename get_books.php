<?php
// Connect to MySQL
$mysqli = new mysqli("localhost", "username", "password", "book_platform");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Retrieve data from the database
$query = "SELECT * FROM books";
$result = $mysqli->query($query);

// Fetch data as an associative array
$books = [];
while ($row = $result->fetch_assoc()) {
    $books[] = $row;
}

// Close connection
$mysqli->close();

// Return data as JSON
echo json_encode($books);
?>

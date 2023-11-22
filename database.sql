CREATE DATABASE IF NOT EXISTS book_platform;
USE book_platform;

CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    rating INT DEFAULT 0
);

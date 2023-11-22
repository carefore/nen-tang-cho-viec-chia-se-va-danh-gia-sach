$(document).ready(function () {
    // Load books on page load
    loadBooks();

    // Submit form
    $("#addBookForm").submit(function (event) {
        event.preventDefault();

        // Get form data
        var formData = {
            title: $("#title").val(),
            author: $("#author").val(),
            description: $("#description").val()
        };

        // Send data to server
        $.ajax({
            type: "POST",
            url: "save_book.php",
            data: formData,
            dataType: "json",
            success: function (data) {
                // Clear form
                $("#addBookForm")[0].reset();

                // Reload books
                loadBooks();
            },
            error: function (error) {
                console.log("Error: " + error);
            }
        });
    });

    // Function to load books from server
    function loadBooks() {
        $.ajax({
            type: "GET",
            url: "get_books.php",
            dataType: "json",
            success: function (data) {
                // Clear book list
                $("#books").empty();

                // Add books to the list
                for (var i = 0; i < data.length; i++) {
                    $("#books").append("<li><strong>" + data[i].title + "</strong> by " + data[i].author + "<br>" + data[i].description + "<br>Rating: " + data[i].rating + "</li>");
                }
            },
            error: function (error) {
                console.log("Error: " + error);
            }
        });
    }
});

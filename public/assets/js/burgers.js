$(function () {
    $(".eatThis").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var eaten = {
            devoured: devoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function () {
                console.log("changed status to", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "https://api.meetup.com/2/cities",
        contentType: "application/html",
        dataType: "jsonp",
        data: "",
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log(response);
        }
    });

    // $.ajax({
    //     type: 'GET',
    //     url: "https://api.meetup.com/2/cities",
    //     dataType: 'jsonp',
    //     success: function (data) {
    //         $.each(data, function(index, element) {
    //             $('body').append($('<div>', {
    //                 text: element.name
    //             }));
    //         });
    //     }
    // });

    // $.ajax({
    //     url: "https://api.meetup.com/2/cities",
    //
    //     dataType: "jsonp",
    //     success: function( response ) {
    //         console.log( response ); // server response
    //     }
    //
    // });
});

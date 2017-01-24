//To start off with a quote
doIt();
//Change the quote everytime the button is pushed
$(document).ready(function() {
    $("#getMessage").on("click", function() {
        doIt();
    });
});

//This is the code to get and display the quotes
function doIt() {
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
        type: 'POST',
        data: {},
        dataType: 'json',
        success: function(data) {
            //Show the quote and the author on different lines
            $("#quote-content").text("\"" + data.quote + "\"");
            $("#quote-author").text("- " + data.author);
        },
        error: function(err) {
            alert(err);
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "ZDRLNucPDUmshnv84BUjqJQcW3ewp1jleEBjsn4t5qLdVhvu5C");
        }
    });
}
$('#tweetQuote').on('click', function tweetQuote(e) {
    var twitterURL = 'https://twitter.com/intent/tweet';
    var text = $('#quote-content').text() + ' - ' + $("#quote-author").text();
    if (text.length > 140) {
        text = text.substr(0, 137) + '...';
    }
    text = encodeURIComponent(text);
    window.open(twitterURL + '?text=' + text);
});

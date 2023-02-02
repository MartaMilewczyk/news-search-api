const submitBtn = $('#search')

submitBtn.on('click', function(event) {
    event.preventDefault();

    const searchTerm = $('#search-term').val();
    const selectOpt = $('#select-option').val();
    const startYear = $('#start-year').val();
    const endYear = $('#end-year').val();

    var hurricane = $(this).attr("data-hurricane");

    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + 
                        "election&api-key=HfXHAiGwsh4XJ85keJTwwfFZGaXMcKBv"

    $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
            console.log(response);
        });
    
    
    $('<div>').append();
})

const clearBtn = $('#clear')

clearBtn.on('click', function(event) {
    event.preventDefault()
    console.log('clear');
});1
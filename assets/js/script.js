
$ (document).ready(function() { 

    function showModal(){
    $('#modal-display').show()
    $('html #shoe-options').css('overflow', 'hidden');
    }
    showModal();

    function hideModal(){
        $('#modal-display').hide()   
    }
    $('#close-modal').click(function(){
    hideModal();
    })
});

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com",
            "X-RapidAPI-Key": "4ab2f5ddb3msha930eb28c1b788dp1a54bajsna218795ca125"
        }
    };
    $.ajax(settings).done(function (response) {
        for (var i = 0; i < response.results.length; i++) {
            var p = $("<div>");
            var img = $('<img>')
            p.text(response.results[i].releaseDate)
            img.attr("src", response.results[i].media.smallImageUrl)
            // $('#shoe-options').append(p);
            $('#shoe-options').append(img);
            // img.onclick = console.log(response.results[i].releaseDate)

        }
        console.log(response);
    });


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
            $('#shoe-options').append(p);
            $('#shoe-options').append(img);

            //console logs release dates of shoes, should only console log release date of clicked shoe
            // img.onclick = console.log(response.results[i].releaseDate)
        }
        console.log(response);
    });

//event listener on click of shoe-options div does not work porperly 
    // $('#shoe-options').click(function(){
    //     console.log(response.results[i].releaseDate)
    // });

    const setting = {
        "async": true,
        "crossDomain": true,
        "url": "https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2019-01-01T00%3A00%3A00&aggregateHours=24&location=Detroit%2CMI%2CUSA&endDateTime=2019-01-03T00%3A00%3A00&unitGroup=us&dayStartTime=8%3A00%3A00&contentType=csv&dayEndTime=17%3A00%3A00&shortColumnNames=0",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
            "X-RapidAPI-Key": "4ab2f5ddb3msha930eb28c1b788dp1a54bajsna218795ca125"
        }
    };
    
    $.ajax(setting).done(function (response) {
        console.log(response);
    });
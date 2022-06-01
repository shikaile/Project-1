// shoe API constant !!NOTICE CONST FOR SHOE API IS 'settings' WHERE AS CONST FOR WEATHER API IS 'setting'!!
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

//Weather API constant !!NOTICE CONST FOR WEATHER API IS 'setting' WHERE AS CONST FOR SHOE API IS 'settings'!!
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

const selectedShoe = $("#shoe-options");
const selectedCity = $("#city-options");
const shoeSelector = $("#shoe-btn");
const citySelector = $("#city-btn");
const shoeRelease = $("#release-date")

//button function for shoe selector button
$(shoeSelector).click(function(){
$.ajax(settings).done(function (response) {
        for (var i = 0; i < response.results.length; i++) {
            var p = $("<div> ");
            var img = $('<img>')
            p.text(response.results[i].releaseDate)
            img.attr("src", response.results[i].media.smallImageUrl)
            $('#release-date').append(p);
            $('#shoe-options').append(img);

            //console logs release dates of shoes, should only console log release date of clicked shoe
            $("shoe-btn").click(function(){
                console.log(response.results[i].releaseDate)
            });
            // console.log(response.results[i].releaseDate)
        }
        console.log(response);
    });
});

//button function for shoe selector button
$(citySelector).click(function(){
    console.log('working button')
});

//onLoad/.ready modal for introduction and explanation of site
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

// Shoe API constant ('settings') function  !!NOTICE CONST FOR SHOE API IS 'settings' WHERE AS CONST FOR WEATHER API IS 'setting'!!
// $.ajax(settings).done(function (response) {
//         for (var i = 0; i < response.results.length; i++) {
//             var p = $("<div> ");
//             var img = $('<img>')
//             p.text(response.results[i].releaseDate)
//             img.attr("src", response.results[i].media.smallImageUrl)
//             $('#release-date').append(p);
//             $('#shoe-options').append(img);

//             //console logs release dates of shoes, should only console log release date of clicked shoe
//             $("shoe-btn").click(function(){
//                 console.log(response.results[i].releaseDate)
//             });
//             // console.log(response.results[i].releaseDate)
//         }
//         console.log(response);
//     });

// event listener on click of shoe-options div does not work porperly 


//Weather API constant ('setting') function !!NOTICE CONST FOR WEATHER API IS 'setting' WHERE AS CONST FOR SHOE API IS 'settings'!!
    // $.ajax(setting).done(function (response) {
    //     console.log(response);
    // });


$("#search-btn").click(function(){
    function showModal(){
        $('#wearshoe').show()
        }
    showModal();
    

    function hideModal(){
        $('#wearshoe').hide()   
        }

        $('#close-modal').click(function(){
            hideModal();
    })
    });

    $("#search-btn").click(function(){
    function showModal(){
        $('#wearshoes').show()
        }
    showModal();
    
    function hideModal(){
        $('#wearshoes').hide()   
        }
        $('#close-modal').click(function(){
            hideModal();
        })
    });

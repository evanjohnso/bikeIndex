import { bikeFinder } from "./../js/bike.js";

$(document).ready(function() {

  function displayBikes(bikeArray) {
    //loop through bike array and display on screen in nice format
    bikeArray.forEach(function(bike) {

      $('#bikeInfo').append('<p>' + bike.title + "- Stolen on: " + bike.date_stolen);
    });
  }
  function displayBikeData(dataObject, location) {
    $('#bikeStolenData').text(`Bikes stolen in ${location}: ${dataObject.stolen}`);
  }

  $('#userInputLocation').submit(function(evt) {
    evt.preventDefault();
    let location = $("input[name='userInputLocation']").val();
    let distance = $("input[name='userInputDistance']").val();
    let color = $("input[name='userInputColor']").val();
    $("input").val("");

    bikeFinder.findBikesByLocation(location, distance, displayBikes, displayBikeData);
  });


});

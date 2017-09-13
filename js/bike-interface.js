import { bikeFinder } from "./../js/bike.js";

$(document).ready(function() {

  function displayBikes(bikeArray) {
    //loop through bike array and display on screen in nice format
    bikeArray.forEach(function(bike) {

      $('#bikeInfo').append(`<div class='col-md-3'>

                                </div>`);

      // $('#bikeInfo').append('<li>' + bike.date_stolen + '</li>');

      console.log(bike);
    });
    // alert(bikeArray);
  }
  function displayBikeData(dataObject) {
    alert("portland has stolen this many bikes " + dataObject.stolen);
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

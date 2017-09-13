import { bikeFinder } from "./../js/bike.js";

$(document).ready(function() {

  function displayBikes(bikeArray) {
    //loop through bike array and display on screen in nice format
    bikeArray.forEach(function(bike) {
      console.log(bike);
    })
    // alert(bikeArray);
  }

  $('#userInputLocation').submit(function(evt) {
    evt.preventDefault();
    let location = $("input[name='userInputLocation']").val();
    let distance = $("input[name='userInputDistance']").val();
    $("input").val("");

    bikeFinder.findBikesByLocation(location, distance, displayBikes);

  });

});

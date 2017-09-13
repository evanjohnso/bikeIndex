import { bikeFinder } from "./../js/bike.js";

$(document).ready(function() {
  $('#userInputLocation').submit(function(evt) {
    evt.preventDefault();
    let location = $("input[name='userInputLocation']").val();
    bikeFinder.displayAllBikesByLocation(location);

  });
});

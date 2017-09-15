import { bikeFinder } from "./../js/bike.js";

$(document).ready(function() {

  function displayBikes(bikeArray) {
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

    bikeFinder.findBikesByLocation(location, distance, displayBikes, displayBikeData, initializeMap, findLatLong);
  });

  let homies = [
                           { lat: 45.511798, lng: -122.694901 },
                           { lat: 45.516007, lng: -122.682562 },
                           { lat: 45.519397, lng: -122.653176 }
                         ];
  let pickles = {lat: 45.5231, lng: -122.6765} ;

  function initializeMap(ourLocation, arrayOfLocations) {
    let ourMap = new google.maps.Map(document.getElementById('bikeMap'), {
      center: ourLocation,
      zoom: 10
    });
    arrayOfLocations.forEach(function(location) {
      new google.maps.Marker({
         position: location,
         map: ourMap,
         title: 'Bike!'
      });
    });
  }
  // console.log(homies);
  // initializeMap(pickles, homies);
  let bikesss = [ {
    stolen_location: "Portland, OR,97202"
  },
  {
    stolen_location: "Portland, OR, 97222"
  },
  {
    stolen_location: "Portland, OR, 97225"
  }

  ];

  function findLatLong(arrayOfOurBikeObjects) {
    let geocoder = new google.maps.Geocoder();
    let coordArray = [];
    // console.log(coordArray);

    return new Promise(resolve, reject) {

    }

    for (var i = 0; i < arrayOfOurBikeObjects.length; i++) {
      let resultAmount = 0;
      let thisAddress = arrayOfOurBikeObjects[i].stolen_location;
      geocoder.geocode( { address: thisAddress },
        function(results) {
          let lat = results[0].geometry.location.lat();
          let lng = results[0].geometry.location.lng();
          let coord = { lat: lat, lng: lng };
          console.log('inside loop'+coord);
          console.log('next one is coordArray');
          console.log(coordArray);
          coordArray.push(coord);
          resultAmount++;
          // console.log(coordArray);
        });
        if (resultAmount === arrayOfOurBikeObjects.length-1) {
          console.log(i);
          console.log(coordArray);
          return coordArray;
        }
    }

    // arrayOfOurBikeObjects.forEach(function(bike) {
    //   let thisAddress = bike.stolen_location;
    //
    // });
    //
    // console.log('this is outside the loop');
    // console.log(coordArray);
    // console.log("After loop");
    // return coordArray;
  }
  let output = findLatLong(bikesss);
  console.log('output');
  console.log(Array.isArray(output));
  console.log(output);
  console.log(output.length);
  console.log(output[0]);
  // let answer = findLatLong(bikesss);
  // console.log('this is the answer');
  // console.log(answer);
  // console.log(typeof(answer));
  // console.log(answer);
  // console.log('the one before');
  // initializeMap(pickles);
  // bikeFinder.findLatLong();
});

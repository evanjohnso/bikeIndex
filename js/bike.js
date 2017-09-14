export let bikeFinder = {

  parseJSONBikeArray: function(responseObject, display, location, initializeMap, findLatLong) {
    let ourBikes = [];
   responseObject.bikes.forEach(function(bike) {
     ourBikes.push(
       //make a smaller bike object
       {
         title: bike.title,
         year: bike.year,
         frame_colors: bike.frame_colors,
         stolen_location: bike.stolen_location,
         date_stolen: moment.unix(bike.date_stolen).format("MM/DD/YYYY"),
       }
     );
   });
    // let coordArray = findLatLong(ourBikes);
    // initializeMap(location, coordArray);
    console.log('this is our bike array' + ourBikes);
    display(ourBikes);
  },

  findBikesByLocation: function(location, distance, display, displayBikeData, initializeMap, findLatLong) {
    $.ajax({
      url: `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=${distance}&stolenness=proximity`,
      type:  "GET",
      data: {
        format: 'json'
      },
      success: (responseObject, statusCode, request) => {
        console.log('first promise');
        this.parseJSONBikeArray(responseObject, display, location, initializeMap, findLatLong);
        this.findBikeCountByLocation(location, distance, displayBikeData);
      },
      error: function(error) {
      }
    });
  },

  findBikeCountByLocation(location, distance, displayBikeData) {
    $.ajax({
      url: `https://bikeindex.org:443/api/v3/search/count?location=${location}&distance=${distance}&stolenness=proximity`,
      type:  "GET",
      data: {
        format: 'json'
      },
      success: (responseObject) => {
        displayBikeData(responseObject, location);
      },
      error: function(error) {
      }
    });
  }
};

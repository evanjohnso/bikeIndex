// apicall to see all bikes in a location within proximity

// display time as human readable format
//user can search for all stolen bikes in an area
//user can search for all stolen bikes in an area by color

//user can see a map with stolen bikes in area

export let bikeFinder = {
  parseJSONBikeArray: function(responseObject, display) {
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
    display(ourBikes);
  },
  findBikesByLocation: function(location, distance, display, displayBikeData) {
    $.ajax({
      url: `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=${distance}&stolenness=proximity`,
      type:  "GET",
      data: {
        format: 'json'
      },
      success: (responseObject) => {
        this.parseJSONBikeArray(responseObject, display);
        this.findBikeCountByLocation(location, distance, displayBikeData);
      },
      error: function(error) {
        console.log(error);
        //alert error message
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
        console.log(error);
        //alert error message
      }
    });
  }
};

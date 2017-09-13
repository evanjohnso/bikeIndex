// apicall to see all bikes in a location within proximity


//user can search for all stolen bikes in an area
//user can search for all stolen bikes in an area by color

//user can see a map with stolen bikes in area

export let bikeFinder = {
  findBikesByLocation: function(location, distance, display) {
    $.ajax({
      url: `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=${distance}&stolenness=proximity`,
      type:  "GET",
      data: {
        format: 'json'
      },
      success: function(responseObject) {
        let ourBikes = [];

       responseObject.bikes.forEach(function(bike) {
         ourBikes.push(
           {
             title: bike.title,
             year: bike.year,
             frame_colors: bike.frame_colors,
             stolen_location: bike.stolen_location,
             date_stolen: bike.date_stolen
           }
         );
       });
        console.log('hey');
        console.log(responseObject.bikes);
        console.log(ourBikes);
        //call front end function to display information
        // display(responseObject);
      },
      error: function(error) {
        console.log(error);
        //alert error message
      }
    });
  }
};

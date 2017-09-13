// apicall to see all bikes in a location within proximity


//user can search for all stolen bikes in an area
//user can search for all stolen bikes in an area by color

//user can see a map with stolen bikes in area

export let bikeFinder = {
  displayAllBikesByLocation: function(location) {
    $.ajax({
      url: `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=5&stolenness=proximity`,
      type:  "GET",
      data: {
        format: 'json'
      },
      success: function(responseObject) {
        console.log(responseObject);
        //call front end function to display information
      },
      error: function(error) {
        console.log(error);
        //alert error message
      }
    });
  }
};

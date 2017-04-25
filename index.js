$(document).ready(function() {
//getJSON = pull a request v. postJSON = save a request
	$.ajax({
	  method: "GET",
	  url: "https://api.myjson.com/bins/2sadq?pretty=1",
	  dataType: "json",
	  success: function(response) {
	  	
	  	$.each(response.apartments, function(_index, apartment){  //_unusedObject 
	  		var displayId = apartment.city.toLowerCase().replace(" ", "_");

	  		$(".apartments").append("<div class='list-group-item' id=" + displayId + "><h4 class='mb-1'>" + apartment.description + "/" + apartment.bedrooms + "/" + apartment.price + "</h4>" + apartment.address + "<br>" + apartment.city + "</div>");
	  	})
	  } 
	});
});



// filter by city
// distinguishing feature of the html (all divs id= "brooklyn").hide)() or .show()
// manipulate city name to proper id 
// make all lower case, if word has a space "The Bronx", insert a "_"

// bootStrap ACTIVE v. remove from INACTIVE class
// exclude everything except for _____ or otherwise
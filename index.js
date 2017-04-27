$(document).ready(function() {
//getJSON = pull a request v. postJSON = save a request

	$.ajax({
	  method: "GET",
	  url: "https://api.myjson.com/bins/2sadq?pretty=1",
	  dataType: "json",
	  success: function(response) {
	  	window.data = response;


	  	$.each(response.apartments, function(_index, apartment){  //_unusedObject 
	  		var displayId = apartment.city.toLowerCase().replace(" ", "-");

	  		$(".apartments").append("<div data-apartment-id=" + apartment.id + " class='list-group-item listing' id=" + displayId + "><h4 class='mb-1'>" + apartment.description + "/" + apartment.bedrooms + "/" + apartment.price + "</h4>" + apartment.address + "<br>" + apartment.city + "</div>");	  	
	  		//"data attributes" when no meaning; no need for ID or class; anything that begins "data"
 	  	})
	  }

	})

	$(".filter").on("click", function(){
		$(".filter").removeClass("active"); //"filter" custom class name
		$(this).addClass("active");

		var city = $(this).attr("id");

		$(".listing").show();

		if (city != "all") {
			$(".listing").not("#" + city).hide();	// .not(ID!=city)		
		};
		
	});

	$(".listing").on("click", function(){

		$.each(window.data.apartments, function(_index, apartment){ 

			if(apartment.id==("data-apartment-id")the real API response, which we dont have access to here, but wedo have access to which we storedin thewindow above. the id off of the element that was clicked)	
			
			var address = apartment.address (once we know that address has been confirmed)

			window.open("http://maps.google.com/?q=" + address);
		});

	});

});	


// window.open("http://maps.google.com/?q=" + address);


// 		for (var i=0; i < response.apartments.length; i++) {
// 			apartments.city[i] = city
// 			var cityCategory = $(".list-group-item")
// 			if (city == )
// 		};





// function updateWordHint(letter) {  // this is a parameter and it will blow up if not called; shows that we are expecting something.
// 		for (var i=0; i < wordArray.length; i++) {  // length = 8, but our i only goes up to 7
// 			if (letter == wordArray[i]) {
// 				wordHint[i] = letter;
// 				fields = wordHint.toString().replace(/,/g," ");  //replace(/aA/g,"_")
// 				$("#chosen-word").text(fields);	
// 			} 
// 		};
// 	}





// filter by city
// distinguishing feature of the html (all divs id= "brooklyn").hide)() or .show()
// manipulate city name to proper id 
// make all lower case, if word has a space "The Bronx", insert a "_"

// bootStrap ACTIVE v. remove from INACTIVE class
// exclude everything except for _____ or otherwise
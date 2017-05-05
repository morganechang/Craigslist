$(document).ready(function() {
	console.log("start")
//getJSON = pull a request v. postJSON = save a request

	$.ajax({
	  method: "GET",
	  url: "https://api.myjson.com/bins/2sadq?pretty=1",
	  dataType: "json",
	  success: function(response) {
	  	window.data = response;


	  	$.each(response.apartments, function(_index, apartment){  // (array, variable used to name a single element in that list; single element in the object/our variable to name)
	  		var displayId = apartment.city.toLowerCase().replace(" ", "-");

	  		$(".apartments").append("<div data-apartment-id="+ apartment.id +" class='list-group-item listing' id=" + displayId + "><h4 class='mb-1'>" + apartment.description + "/" + apartment.bedrooms + "/" + apartment.price + "</h4>" + apartment.address + "<br>" + apartment.city + "</div>");	  	
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

	$(document).on("click", ".listing", function(){ //getting around CLICKS for dynamically created elements; have to append a clickhandler to something that is real on the page when DOM loads
		console.log("user clicked");
		debugger
		var ourApartments = window.data.apartments; //we saved our API response in the window
		var clickedApartmentId = $(this).attr("data-apartment-id");//we created the unique id and added as 'attribute' / what attribute is expecting is a string with the attribute name (ie: id)
		debugger
		
		// for (var i = 0; i < ourApartments.length; i++) {
		// 	ourApartments[i]; // this is access a SINGLE element from our code
		// 	if(ourApartments[i].id==clickedApartmentId){
		// 		debugger
		// 		var mapAddress = ourApartments[i].address;
		// 		window.open("http://maps.google.com/?q=" + mapAddress);
		// 	}
		// };
	
		// $.each(ourApartments, function(_index, loopApartment){ //_index = _ best practice 
		// 	if(loopApartment.id==clickedApartmentId){
		// 		var mapAddress = loopApartment.address;
		// 		window.open("http://maps.google.com/?q=" + mapAddress);
		// 	}
		// });

		ourApartments.forEach(function(loopApartment, index, ourApartments){
			if(loopApartment.id==clickedApartmentId){
				var mapAddress = loopApartment.address;
				window.open("http://maps.google.com/?q=" + mapAddress);
			};
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
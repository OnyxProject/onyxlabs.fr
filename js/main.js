function validateEmail(email){
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    return re.test(email);
}

$(function(){

    $("#contactButton").click(function(){


        var msg = {
            name: $('#name').val(),
            email: $('#email').val(),
						subject: $('#subject').val(),
            description: $('#message').val()
        };

        if(!validateEmail(msg.email)){
            Materialize.toast('Invalid email !', 3000, 'rounded', 'red');
						return ;
        }

        $.ajax({
            url: 'https://eez0hajdge.execute-api.us-east-1.amazonaws.com/prod/contact',
            type: 'POST',
            data: JSON.stringify(msg),
            contentType: 'application/json'
        })
        .done(function(data){
						Materialize.toast('Your email has been Sent !', 3000, 'rounded', 'green')
            $('#message').val("");

        })
        .fail(function(){
            Materialize.toast('An Error has occured !', 3000, 'rounded', 'red')
        });
        return false;
    });

});

$(document).ready(function(){

	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});

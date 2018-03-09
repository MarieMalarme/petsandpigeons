function myFunction(x) {
    if (x.matches) { // If media query matches
        $("#navbar2").hide();
    } else {
        $("#navbar2").show();
    }
}

var x = window.matchMedia("(min-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.title').fadeOut();
        $('.glyphicon-arrow-left').fadeOut();
        $('.glyphicon-arrow-right').fadeOut();
     }
    else
     {
      $('.title').fadeIn();
      $('.glyphicon-arrow-left').fadeIn();
      $('.glyphicon-arrow-right').fadeIn();
     }

     if ($(this).scrollTop()>150)
     {
        $('#navbar2').fadeIn();
     } else 
     { 
     	$('#navbar2').fadeOut();
 	 }
 });


$(window).scroll(function() {

    if ($(this).scrollTop()>0)
	{
		$('.navbar1').fadeOut();
	} else if ((window.matchMedia("(min-width: 768px)").matches))
	{
		$('.navbar1').fadeIn();
	}
});

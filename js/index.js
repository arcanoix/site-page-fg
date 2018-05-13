$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfoliofiltro").fadeTo(100, 0.1);
		$("#portfoliofiltro div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfoliofiltro").fadeTo(300, 1);
    }, 300); 
		
	});
});


	


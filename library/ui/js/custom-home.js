// Customize Jquery Plugins
$(document).ready(function() {
// Fancybox Execute
	$(".fancybox").fancybox();
// Slidorion
	$('#slidorion').slidorion({
			hoverPause: true,
			interval: 3000,
			speed: 800,
		});
//Main Slider(Slider)
	/*
	$('#camera_wrapper').camera({
		pagination: false,
		thumbnails: false,
		navigation: true,
		playPause: false,
		time: 4000,
		hover: false,
	});
	*/
	});
//Tinynav plugin execute
$(function () {
    $("#nav").tinyNav();
});
      // Back to top
       $('#backtop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
        });
        
        $(document).ready(function() {

  // get the action filter option item on page load
  var $filterType = $('#filterOptions li.active a').attr('class');
	
  // get and assign the ourHolder element to the
	// $holder varible for use later
  var $holder = $('ul.ourHolder');

  // clone all items within the pre-assigned $holder element
  var $data = $holder.clone();

  // attempt to call Quicksand when a filter option
	// item is clicked
	$('#filterOptions li a').click(function(e) {
		// reset the active class on all the buttons
		$('#filterOptions li').removeClass('active');
		
		// assign the class of the clicked filter option
		// element to our $filterType variable
		var $filterType = $(this).attr('class');
		$(this).parent().addClass('active');
		
		if ($filterType == 'all') {
			// assign all li items to the $filteredData var when
			// the 'All' filter option is clicked
			var $filteredData = $data.find('li');
		} 
		else {
			// find all li elements that have our required $filterType
			// values for the data-type element
			var $filteredData = $data.find('li[data-type=' + $filterType + ']');
		}
		return false;
	});
});
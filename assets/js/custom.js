/**	
	7. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
	
	
**/



(function( $ ){

	
	 
	
	
	/* ----------------------------------------------------------- */
	/*  6. PORTFOLIO GALLERY
	/* ----------------------------------------------------------- */ 
	
		$('.filtr-container').filterizr();

		//Simple filter controls

	    $('.mu-simplefilter li').click(function() {
	       $('.mu-simplefilter li').removeClass('active');
	        $(this).addClass('active');
	    });


	/* ----------------------------------------------------------- */
	/*  7. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
	/* ----------------------------------------------------------- */ 

	$('.mu-imglink').magnificPopup({
	  type: 'image',
	  mainClass: 'mfp-fade',
	  gallery:{
	    enabled:true
	  }
	});

	
	
})( jQuery );



  
	
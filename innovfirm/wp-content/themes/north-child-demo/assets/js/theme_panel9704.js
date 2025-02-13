jQuery(window).load(function(){

	'use strict';

	// Theme Panel Open/Close
	jQuery( "#theme_panel #theme_panel_button").click(function(){
	
		var holder = jQuery('#theme_panel');
		
		if(jQuery(this).hasClass('open')) {
			holder.removeClass('open_panel').addClass('close_panel');
			jQuery(this).removeClass('open').addClass('closed');
		} else {
			holder.removeClass('close_panel').addClass('open_panel');
			jQuery(this).removeClass('closed').addClass('open');
		}

		return false;
	});

	// Color Skins
//	jQuery('.color_link').click(function(){
//		var title = jQuery(this).attr('title');		
//		jQuery('#changeable_color').attr('href', 'css/colors/' + title + '.css');				
//	  	return false;
//    });	
    
    jQuery(".color_link").click(function() {
    	jQuery("link[data-id=5]").attr("href","https://goldeyes.net/north/wordpress/wp-content/themes/north-child-demo/assets/css/schemes.php?color="+jQuery(this).attr('data-color'));
    	return false;
    });


    // Color Skins
	jQuery('#black_menu').click(function(){
		jQuery('nav').addClass('dark-nav').removeClass('white-nav');
		jQuery('img.site_logo').attr('src', 'https://goldeyes.net/north/wordpress/wp-content/uploads/2014/07/logo7.png');				
    });	

    // Color Skins
	jQuery('#white_menu').click(function(){
		jQuery('nav').addClass('white-nav').removeClass('dark-nav');	
		jQuery('img.site_logo').attr('src', 'https://goldeyes.net/north/wordpress/wp-content/uploads/2014/07/logo-dark1.png');		
    });	


    // Normal Nav - For only Fulscreen Versions
	jQuery('#nav_normal').click(function(){
		jQuery('#navigation').removeClass('nav-from-top');			
    });	

    // Nav From Top - For only Fulscreen Versions
	jQuery('#nav_from_top').click(function(){
		jQuery('#navigation').addClass('nav-from-top');			
    });


    // Nav From Top - For only Fulscreen Versions
	jQuery('.layout_tone').click(function(){
		var title = jQuery(this).attr('title');		
		jQuery('#layout-tone-css').attr('href', 'https://goldeyes.net/north/wordpress/wp-content/themes/north/css/skins/' + title + '.css');				
	  	return false;	
    });

});

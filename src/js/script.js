$(function () {
	var $link     = $('.main__link'),
		$imgBig   = $('.wrap-img').find('img'),
		$navLink  = $('.navi__item__link'),
		$popupImg = $('.popup__list__item__link');

		/*main page switcher*/

	    $link.on('click', function (e) {
	    	e.preventDefault();

	    	var $self     =     $(this),
	    		$linkData = $self.data('image');

		    $imgBig.each(function(index, el) {
		   		
		   		if ( $(el).data('image') == $linkData ) {
		   			$imgBig.removeClass('wrap-img--active');
		   			$(el).addClass('wrap-img--active');
		   		} 	

		    });

		    $navLink.each(function(index, el) {
		  		if ( $(el).data('image') == $linkData) {
		  			$navLink.removeClass('navi__item__link--active');
		  			$(el).addClass('navi__item__link--active');
		  		}  	

		    });
	    });

	    $navLink.on('click', function (e) {
	    	e.preventDefault();

	    	var $this    = $(this),
	    		$navData = $this.data('image');
	    	if ( $this.hasClass('navi__item__link--active') ) {
	    		return false;
	    	}
	    	else {
	    		$navLink.removeClass('navi__item__link--active')
	    		$this.addClass('navi__item__link--active');

	    		 $imgBig.each(function(index, el) {
	    				
	    				if ( $(el).data('image') == $navData ) {
	    					$imgBig.removeClass('wrap-img--active');
	    					$(el).addClass('wrap-img--active');
	    				} 	

	    		 });
	    	}
	    });

	    /*Popup image switcher*/

	    $popupImg.on('click', function(e) {
	    	e.preventDefault();

	    	var $self = $(this);
	    	$('.popup__list__item__link').parent().find('.popup__list__item--active').remove();
	    	$('<a href="#" class="popup__list__item--active"></a>').insertBefore($self);
	    });
});
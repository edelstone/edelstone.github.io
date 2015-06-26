;(function($, window, document, undefined) {

	$.fn.animatedBG = function(options){
		var defaults = {
				colorSet: ['#171123', '#0E0E0E', '#260000', '#0E0E0E'],
				speed: 12000
			},
			settings = $.extend({}, defaults, options);

		return this.each(function(){
			var $this = $(this);

			$this.each(function(){
				var $el = $(this),
					colors = settings.colorSet;
				
				function shiftColor() {
					var color = colors.shift();
					colors.push(color);
					return color;
				}

				// initial color
				var initColor = shiftColor();
				$el.css('backgroundColor', initColor);
				setInterval(function(){
					var color = shiftColor();
					$el.animate({backgroundColor: color}, 12000);
				}, settings.speed);
			});
		});
	};

	// Initialize
	$(function(){
		$('.animated_bg').animatedBG();
	});

}(jQuery, window, document));
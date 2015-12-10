/**
 *	Initalizes all sliders
 */
var init = function() {
	var elements = document.getElementsByClassName('tab-slider');

	for(var i = 0; i < elements.length; i++) {
		var slider = TabSlider();				// Create new Slider object
		slider.init(elements[i]);				// Initialize it with HTML element
	}
};

init();

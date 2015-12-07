//
//	contentSlider.js
//

var ContentSlider = function () {

	var currIndex = 0;

	// Options
	var config = {
		width			: '',		// Gallery width
		height		: '',		// Gallery height
		slide			: 500,	// Slide transition duration
	}

	// Element class name constants
	var CLASSNAME = {

	};

	/**
	 *	Animates image transition
	 */
	var updateImage = function (newIndex) {
		var holder = images[0].parentElement; // Parent div of images
		var position = -(config.width) * newIndex + 'px';
		Velocity(holder, { translateX: position }, config.slide);
	};

	/**
	 *	Selects a new nav
	 */
	var updateNav = function (newIndex) {
		if (newIndex < 0 || newIndex >= numImages) {
			console.log('Invalid index out of bounds');
			return;
		}

		var navList1 = nav.children[0];	// hardcoded, FIX LATER
		var navList2 = nav.children[2];

		// Update dot in correct list
		if (currIndex < config.spacing) {
			navList1.children[currIndex + 1].className = CLASSNAME.DOT;
		} else {
			navList2.children[currIndex - config.spacing + 1].className = CLASSNAME.DOT;
		}
		if (newIndex < config.spacing) {
			navList1.children[newIndex + 1].className = CLASSNAME.DOT_SELECT;
		} else {
			navList2.children[newIndex - config.spacing + 1].className = CLASSNAME.DOT_SELECT;
		}
	};

	/**
	 *	Updates image and nav dots
	 */
	var update = function (newIndex, loop) {
		if (newIndex < 0 || newIndex >= numImages) {
			console.log('Invalid index, out of bounds');
			return;
		}
		updateImage(newIndex);
		updateNav(newIndex);
		currIndex = newIndex;

		if(!loop && timer != 0) { // resets timer if from mouse click
			startLoop();
		}
	};

	var createNav = function () {

	};

	/**
	 *	Gets and removes config variables from data attributes
	 */
	var initConfig = function (slider) {

	};

	/**
	 *	Populates DOM with gallery and nav, adds event listeners
	 */
	var initSlide = function (slider) {
	};

	/**
	 *	Public methods
	 */
	return {
		init				: initSlide,
		startLoop 	: startLoop,
		stopLoop 		: stopLoop
	};

};

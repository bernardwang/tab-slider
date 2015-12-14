//
//	tabSlider.js
//

var TabSlider = function () {

	var currIndex;
	var maxIndex;

	var selectBar;
	var pages;

	/**
	 *	Animates page transition
	 */
	var updatePage = function (newIndex) {
		var position = -100/maxIndex * newIndex + '%';
		Velocity(pages, { translateX: position }, 500);
	};

	/**
	 *	Selects a new tab
	 */
	var updateTab = function (newIndex) {
		var position = newIndex/maxIndex * 100 + 5 +'%';
		Velocity(selectBar, { left: position }, 500);
	};

	/**
	 *	Updates page and tabs
	 */
	var update = function (newIndex) {
		if (newIndex < 0 || newIndex >= maxIndex) {
			console.log('Invalid index, out of bounds');
			return;
		}
		updatePage(newIndex);
		updateTab(newIndex);
		currIndex = newIndex;
	};

	/**
	 *	Adds event listeners
	 */
	var initSlide = function (slider) {
		var tabs = slider.children[0].children[0].children;
		selectBar = slider.children[0].children[1].children[0];
		pages = slider.children[1].children[0];

		currIndex = 0;
		maxIndex = tabs.length;

		pages.style.width = 100 * maxIndex + '%';
		selectBar.style.width = 100/maxIndex - 10 + '%';

		for(var i = 0; i < maxIndex; i++) {
			pages.children[i].style.width = 100/maxIndex + '%';
			(function(index){
				tabs[index].addEventListener('click', function(){
					update(index);
				});
			})(i)
		}

		update(currIndex);
	};

	/**
	 *	Public methods
	 */
	return {
		init : initSlide
	};

};

//
//	tabSlider.js
//

var TabSlider = function () {

	var usingJQuery = false;

	var currIndex;
	var maxIndex;

	var tabs;
	var selectBar;
	var pages;

	/**
	 *	Animates page transition
	 */
	var updatePage = function (newIndex) {
		pages[currIndex].style.display = 'none';
		pages[newIndex].style.display = 'block';	// prevent flashing

		if(usingJQuery){
			$.Velocity.animate(pages[newIndex], 'fadeIn', 500);
		} else {
			Velocity(pages[newIndex], 'fadeIn', 500);
		}
	};

	/**
	 *	Selects a new tab
	 */
	var updateTab = function (newIndex) {
		var position = newIndex/maxIndex * 100 + 5 +'%';

		if(usingJQuery){
			$.Velocity.animate(selectBar, { left: position }, 500);
		} else {
			Velocity(selectBar, { left: position }, 500);
		}

		tabs[currIndex].className = 'nav-title';
		tabs[newIndex].className += ' selected';
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
		tabs = slider.getElementsByClassName('nav-title');
		selectBar = slider.getElementsByClassName('select-bar')[0];
		pages = slider.getElementsByClassName('content-page');

		currIndex = 0;
		maxIndex = tabs.length;

		//pages.style.width = 100 * maxIndex + '%';
		selectBar.style.width = 100/maxIndex - 10 + '%';

		if(pages.length != maxIndex){
			console.log('Incorrect number of pages in tab slider');
			maxIndex = Math.min(pages.length, maxIndex);
		}

		for(var i = 0; i < maxIndex; i++) {
			pages[i].style.width = 100/maxIndex + '%';
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

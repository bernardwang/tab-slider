//
//	tabSlider.js
//

var TabSlider = function () {

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

		if(window.jQuery){
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

		if(window.jQuery){
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
		// Init variables
		tabs = slider.getElementsByClassName('nav-title');
		selectBar = slider.getElementsByClassName('select-bar')[0];
		pages = slider.getElementsByClassName('content-page');

		currIndex = 0;
		maxIndex = tabs.length;

		// Set nav selection bar
		selectBar.style.width = 100/maxIndex - 10 + '%'; 	// bar is slightly smaller than title width
		selectBar.style.left = '5%';	// default is first page

		// Check for correct markup
		if(pages.length != maxIndex){
			console.log('Incorrect number of pages in tab slider');
			maxIndex = Math.min(pages.length, maxIndex);
		}

		// Add event listeners to nav bar
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

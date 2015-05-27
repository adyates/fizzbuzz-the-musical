'use strict';

var sodaBeeDisplay = document.getElementById('content-display');

function createSodaBee(e) {
	// Throw the current SodaBee to the side (Otherwise the counter freezes)...
	var lastSodaBee = sodaBeeDisplay.children[sodaBeeDisplay.children.length - 1];
	lastSodaBee.className += ' fling';

	// ...while adding the new one
	var newSodaBee = document.createElement('span');
	newSodaBee.className = 'sodabee';
	sodaBeeDisplay.appendChild(newSodaBee);
}

// Make the new one when the previous ends
sodaBeeDisplay.addEventListener('webkitAnimationEnd', createSodaBee, false);

// Kick this thing off by animating the initial span
sodaBeeDisplay.children[0].className = 'sodabee';
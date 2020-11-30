'use strict';
{
	document.querySelector('#letters-toggle').addEventListener('click', e => {
		e.preventDefault();
		toggleOnOff('#letters', '#numbers');
	});

	document.querySelector('#numbers-toggle').addEventListener('click', e => {
		e.preventDefault();
		toggleOnOff('#numbers', '#letters');
	});

	document.querySelector('#nav-toggle').addEventListener('click', e => {
		e.preventDefault();
		toggleHidden('nav');
	});

	function toggleHidden(selector) {
		document.querySelector(selector).classList.toggle('hidden');
	}

	function toggleOnOff(onSelector, offSelector) {
		document.querySelector(offSelector).classList.add('hidden');
		document.querySelector(onSelector).classList.remove('hidden');
	}
}

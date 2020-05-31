function qs(selector) {
	var el = getElementByQuerySelector(selector);
}

function onTouch(elementSelector, callback) {
	elementSelector.addEventListener('touchend', callback());
	elementSelector.addEventListener('click', callback());	
}

function readFromLS(key) {
	var returnArray = JSON.parse(window.localStorage.getItem(key));
	return returnArray;
}

function writeToLS(key, data) {
	window.localStorage.setItem(key, JSON.stringify(data));
}

function clearStorage() {
	window.localStorage.clear()
}
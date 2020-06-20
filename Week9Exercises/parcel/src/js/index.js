import shipController from "./ships";

console.log(shipController.getShips());
console.log(shipController.getShipByName("Executor"));

// check to see if javascript is working
function component() {
  const element = document.createElement("p");

  element.innerHTML = "Setup Appears to be working &#128521; Let's see if it can handle an API!";

  document.title = "New dynamic title!"

  return element;
}

var elementOut = document.getElementById("element");

elementOut.appendChild(component());

const spaceButton = document.getElementById('space'); 
const outputDiv = document.getElementById('output');
const spacePhoto = document.getElementById('spacePhoto');

//These two functions are set up to clear the loading output after the picture has finished loading.
function wait(callback){ setTimeout(callback, 2000);}

function clearOutput() {
	outputDiv.innerHTML = "";
}

//This is the button that loads the picture. By putting all our set up in here, we also ensure that the date can be randomized and the API called multiple times without refreshing the page, making the program truly dynamic.
spaceButton.addEventListener('click', () => {

	//Creating a random date.
	var date = new Date(+(new Date()) - Math.floor(Math.random()*100000000000));
	console.log(date);

	//Setting the proper format that the API requires.
	var spaceDate = date.toISOString().substr(0, 10);

	//Preparing the API request, using our api key and our random date. It took me a little while to figure out API keys.
	const spaceURL = 'https://api.nasa.gov/planetary/apod?api_key=Aj3aZZ1ZX9H5YfwheMgVWGyYVwghvILvpOU9MGvt&date=' + spaceDate;

	//Setting our output clear on a timer.
	wait(clearOutput);

	//Getting the data from NASA's API
	fetch(spaceURL) 
	.then( response => { outputDiv.innerHTML = "Photo loading..."; 
		if(response.ok) { return response; } 
		throw Error(response.statusText); }) .then( response => response.json() ) 
	.then( data => spacePhoto.src = data.url ) 
	.catch( error => console.log('There was an error:', error)) },false);

// shipController.getShips().then((data) => {
//   console.log(data);
// });

import Photo from './photo.js'

//The main gist of this week's lesson was asymmetric functions and their use in creating dynamic web pages.
			//JavaScript itself has many functions to make this happen: callbacks, promises and json loaders.

			//This program calls an api hosted by NASA, which displays one picture per day.
			//However, one picture is not enough! We want more! So this program also calls the API with a radom date
			//allowing us to see pictures from previous days.

			//These set up the basic elements of the program, to allow our functions to call them easier. 
			//This can simplify things so we don't enter callback hell.
			const randomButton = document.getElementById('random');
			const searchButton = document.getElementById('search'); 
			const pictureDiv = document.getElementById('loading');
			const spacePhoto = document.getElementById('spacePhoto');
			const cardDiv = document.getElementById('card');
			const title = document.getElementById('title');
			const description = document.getElementById('description');
			const hdurl = document.getElementById('hdurl');
			const url = document.getElementById('url');
			var photoObject;

			//This is the button that loads the picture. By putting all our set up in here, we also ensure that the date can be randomized and the API called multiple times without refreshing the page, making the program truly dynamic.
			randomButton.addEventListener('click', async () => {

				let photoData;

				//Creating a random date.
				var date = new Date(+(new Date()) - Math.floor(Math.random()*100000000000));
				console.log(date);

				//Setting the proper format that the API requires.
				var spaceDate = date.toISOString().substr(0, 10);

				console.log(spaceDate);

				//Preparing the API request, using our api key and our random date. It took me a little while to figure out API keys.
				const spaceURL = 'https://api.nasa.gov/planetary/apod?api_key=Aj3aZZ1ZX9H5YfwheMgVWGyYVwghvILvpOU9MGvt&date=' + spaceDate;

				photoData = await fetch(spaceURL) 
				.then( response => { pictureDiv.innerHTML = "Photo loading..."; 
					if(response.ok) { return response; } 
					throw Error(response.statusText); }) .then( response => response.json() ) 
				.then( data => {return data; }) 
				.catch( error => console.log('There was an error:', error)),false;

				if (photoData) {
					let photoObject = new Photo(photoData);
				}

				pictureDiv.innerHTML = "";

				console.log(photoObject);
				console.log(photoData);

				if(!photoObject.hdurl) {
					spacePhoto.src = 'image-placeholder.png';
					pictureDiv.innerHTML = "This day's photo is actually a video, which this webpage does not support. Please try a different day.";
				} else {
					spacePhoto.src = photoObject.url;
				}

				if(photoObject) {
					title.innerHTML = "Title: " + photoObject.title;
					description.innerHTML = "Description: " + photoObject.description;
					hdurl.innerHTML = "HD URL: " + photoObject.hdurl;
					url.innerHTML = "URL: " + photoObject.url;
				}

				return photoObject;

			})


			searchButton.addEventListener('click', async () => {

				var photoData = [];

				//Creating a random date.
				var date = document.getElementById("searchbar").value;
				console.log(date);

				//Preparing the API request, using our api key and our random date. It took me a little while to figure out API keys.
				const spaceURL = 'https://api.nasa.gov/planetary/apod?api_key=Aj3aZZ1ZX9H5YfwheMgVWGyYVwghvILvpOU9MGvt&date=' + date;

				var datecheck1 = Date.parse(date);
				var datecheck2 = Date.parse('1995-06-16')

				if(datecheck1 >= datecheck2) {

				photoData = await fetch(spaceURL) 
				.then( response => { pictureDiv.innerHTML = "Photo loading..."; 
					if(response.ok) { return response; } 
					throw Error(response.statusText); }) .then( response => response.json() ) 
				.then( data => {return data; }) 
				.catch( error => console.log('There was an error:', error)),false;

				} else {
					photoData.hdurl = "";
				}

				if (photoData) {
					let photoObject = new Photo(photoData);
				}

				pictureDiv.innerHTML = "";

				console.log(photoObject);
				console.log(photoData);

				if(!photoObject.hdurl) {
					spacePhoto.src = 'image-placeholder.png';
					pictureDiv.innerHTML = "This day's photo is actually a video, which this webpage does not support. Please try a different day.";
				} else {
					spacePhoto.src = photoObject.url;
				}

				if(photoObject) {
					title.innerHTML = "Title: " + photoObject.title;
					description.innerHTML = "Description: " + photoObject.description;
					hdurl.innerHTML = "HD URL: " + photoObject.hdurl;
					url.innerHTML = "URL: " + photoObject.url;
				}

				return photoObject;

			})

		cardDiv.addEventListener('click', () => {
			cardDiv.classList.toggle("flipped");
			cardDiv.classList.toggle("unflipped");
			})



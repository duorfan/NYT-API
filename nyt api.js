let endpoint = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey
`;

let imageElement = document.getElementById("dogImg");

fetch(endpoint)

	.then(function(response){
		return response.json();
	})

	.then(function(jsonData){
		imageElement.src = jsonData.message;
	})
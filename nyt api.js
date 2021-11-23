//https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
//n7AjUVNVn8wsg7q5RmfLwn3aeJMoAVdG

let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=n7AjUVNVn8wsg7q5RmfLwn3aeJMoAVdG";

let headlines = document.getElementById("headlines");

fetch(url).then(response => response.json())
		  .then(data => {
			console.log(data);
			
			data.results.map(article => {

				console.log(article.title);

				let a = document.createElement("a");
				a.setAttribute('href', article.url);
				a.innerHTML = article.title;

				let b = document.createElement("b");
				b.innerHTML = article.abstract;

				let img = document.createElement("img");
				img.setAttribute('src', article.multimedia[0].url);

				headlines.appendChild(a);
				headlines.appendChild(b);	
				headlines.append(img);		

			})
		})

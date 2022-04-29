const urlArray = window.location.href.split("/");
const urlWhere = urlArray.at(-1);
console.log(urlWhere);
// var searchResult = window.location.search;
// console.log(searchResult);
// var searchResult = getParameterByName('search-result');

const getMovies = async () => {
  const data = await fetch(
    "https://floating-depths-94622.herokuapp.com/api/movies"
  );
  const movies = data.json();
  return movies;
};

const movieList = getMovies();

console.log(movieList);

function searchTitle(title) {
  title = title.toLowerCase();
  title = title.replace(/[^A-Za-z0-9' ]/g, "");
  const newTitle = title.split(" ");
  return newTitle;
}

// const searchFormHandler = async (event) => {
//     event.preventDefault();

//     const searchResult = document.querySelector('#search-result').value.trim();
//     searchResult = searchTitle(searchResult);

//     movieDB = getMovies();
//     resultList = []
//     for (let i=0; i<movieDB.length; i++) {
//         const intersection = movieDB[i].searchTitle.filter(element => searchResult.includes(element));
//         if (intersection === searchResult) {
//             resultList.push(movieDB[i]);
//         }
//     }
// }

function showResults(resultList) {
  const resultGallery = document.querySelector("#gallery-list");
  for (i = 0; i < resultList.length; i++) {
    const newLink = document.createElement("a");
    const newCard = document.createElement("div");
    const newPoster = document.createElement("img");
    const newBody = document.createElement("div");
    const newText = document.createElement("p");

    newText.textContent = resultList[i].title;

    resultGallery.appendChild(newCard);
    newCard.appendChild(newLink);
    newLink.appendChild(newPoster);
    newCard.appendChild(newBody);
    newBody.appendChild(newText);

    newCard.setAttribute("class", "card");
    newCard.setAttribute("style", "width: 18rem;");
    newLink.setAttribute("href", `/review/${resultList[i].id}`);
    newPoster.setAttribute("class", "card-img-top");
    newPoster.setAtrribute("src", `${resultList[i].poster}`);
    newPoster.setAtrribute("alt", `${resultList[i].title} film poster`);
    newBody.setAttribute("class", "card-body");
    newText.setAttribute("class", "card-text");
  }
}

//Needs https://stackoverflow.com/questions/44342226/next-js-error-only-absolute-urls-are-supported
//Needs DB and server to be spun up

//Create cards with info

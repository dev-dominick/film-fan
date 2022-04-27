const fetch = require('node-fetch');

const getMovies = async () => {
    const data = await fetch('/api/movies');
    const movies = data.json()
    return movies
}

const movieList = getMovies();

console.log(movieList);

function searchTitle(title) {
    title = title.toLowerCase();
    title = title.replace(/[^A-Za-z0-9' ]/g,"");
    const newTitle = title.split(" ")
    return newTitle;
}

const searchFormHandler = async (event) => {
    event.preventDefault();

    const searchResult = document.querySelector('#search-input').value.trim();
    searchResult = searchTitle(searchResult);

    movieDB = getMovies();
    resultList = []
    for (let i=0; i<movieDB; i++) {
        const intersection = movieDB[i].searchTitle.filter(element => searchResult.includes(element));
        if (intersection === searchResult) {
            resultList.push(movieDB[i]);
        }
    }


}

//Needs https://stackoverflow.com/questions/44342226/next-js-error-only-absolute-urls-are-supported
//Needs DB and server to be spun up
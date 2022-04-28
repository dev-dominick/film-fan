const fetch = require('node-fetch');

const getMovies = async () => {
    const data = await fetch('/api/movies');
    const movies = data.json()
    return movies
}

const movieList = getMovies();

function searchTitle(title) {
    title = title.toLowerCase();
    title = title.replace(/[^A-Za-z0-9' ]/g,"");
    const newTitle = title.split(" ")
    return newTitle;
}

const searchFormHandler = async (event) => {
    event.preventDefault();

    const searchResult = document.querySelector('#search-result').value.trim();
    searchResult = searchTitle(searchResult);

    movieDB = getMovies();
    resultList = []
    for (let i=0; i<movieDB.length; i++) {
        const intersection = movieDB[i].searchTitle.filter(element => searchResult.includes(element));
        if (intersection === searchResult) {
            resultList.push(movieDB[i]);
        }
    }
    if (resultList) {
        const passedValue = document.querySelector('#hidden-value');
        passedValue.setAttribute('value', `${searchResult}`);
        document.location.replace('/results');
    }
    else {
        alert('No film matching those terms! Please search again.')
    }
}

document.querySelector('#search').addEventListener('click', searchFormHandler);








//Needs https://stackoverflow.com/questions/44342226/next-js-error-only-absolute-urls-are-supported
//Needs DB and server to be spun up

//Create cards with info
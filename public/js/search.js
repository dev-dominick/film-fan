
const getMovies = async () => {
    const data = await fetch(
      "https://floating-depths-94622.herokuapp.com/api/movies"
    );
    const movies = data.json()
    return movies
}



function searchTitle(title) {
    title = title.toLowerCase();
    title = title.replace(/[^A-Za-z0-9' ]/g,"");
    const newTitle = title.split(" ")
    return newTitle;
}
const searchBtn = document.getElementById('search')
const searchFormHandler = async (event) => {
    event.preventDefault();

    console.log('click');

    let searchResult = document.querySelector('#search-result').value.trim();
    console.log(searchResult);
    searchResult = searchTitle(searchResult);



    const movieDB = getMovies();
    resultList = []
    for (let i=0; i<movieDB.length; i++) {
        const intersection = movieDB[i].searchTitle.filter(element => searchResult.includes(element));
        if (intersection === searchResult) {
            resultList.push(movieDB[i]);
        }
    }
    if (resultList) {
        document.location.replace(`/results/${searchTitle}`);
    }
    else {
        alert('No film matching those terms! Please search again.')
    }
}

searchBtn.addEventListener('click', searchFormHandler);



        // const passedValue = document.querySelector('#hidden-value');
        // passedValue.setAttribute('value', `${searchResult}`);




//Needs https://stackoverflow.com/questions/44342226/next-js-error-only-absolute-urls-are-supported
//Needs DB and server to be spun up

//Create cards with info

const getMovies = async () => {
    console.log("ding ding");
    let movies = await fetch(
      "https://floating-depths-94622.herokuapp.com/api/movies"
    ).then(data => data.json()).then(movieData => movieData)
        console.log({movies});
    return movies
}



function titleSearch(title) {
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
    const searchResult2 = titleSearch(searchResult);

    console.log(searchResult2);

    const movieDB = await getMovies();
    resultList = []
    for (let i=0; i<movieDB.length; i++) {
        const intersection = movieDB[i].searchTitle.filter(element => {
            console.log(element);
            return searchResult2.includes(element)});
        if (intersection === searchResult2) {
            resultList.push(movieDB[i]);
        }
    }
    console.log(resultList);
    if (resultList.length) {
        document.location.replace(`/results/${searchResult}`);
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
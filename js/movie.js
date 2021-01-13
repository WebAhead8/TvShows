const formMovie = document.querySelector("form");
const nameMovie = document.querySelector("movie-name");
const outputResult = document.querySelector("output");
const inputBox = document.querySelector("#movie-name");
let imgBaseUrl = "https://image.tmdb.org/t/p/w780";



formMovie.addEventListener("submit", event => {
    event.preventDefault();

    let movieName = document.createElement("h2");
    let movieRDate = document.createElement("h5");
    let movieRate = document.createElement("h5");
    let movieOverview = document.createElement("h5");
    let movieLanguage = document.createElement("h5");
    var movieImg = document.createElement("img");
    let errMsg = document.createElement("h2");
    const searchName = document.querySelector('#movie-name').value;

    outputResult.innerHTML = "";
    inputBox.value = "";

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchName}`)
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json()
        })
        .then(result => {

            movieName.textContent = result.results[0].title;
            movieLanguage.textContent = "Language : " + result.results[0].original_language;
            movieRDate.textContent = "Release Date : " + result.results[0].release_date;
            movieRate.textContent = "Rate : " + result.results[0].vote_average;
            movieOverview.textContent = "Overview : " + result.results[0].overview;
            outputResult.appendChild(movieName);
            outputResult.appendChild(movieImg);
            outputResult.appendChild(movieLanguage);
            outputResult.appendChild(movieRDate);
            outputResult.appendChild(movieRate);
            outputResult.appendChild(movieOverview);

            movieImg.src = imgBaseUrl + result.results[0].poster_path;
            movieImg.classList.add("imgSize");

        })
        .catch(error => {
            if (error.message === "404") {
                errMsg.classList.add("errorMes")
                errMsg.textContent = "⚠️ Something went wrong";
                outputResult.appendChild(errMsg);
            } else {
                errMsg.classList.add("errorMes")
                errMsg.textContent = `⚠️ Couldn't find ${searchName}`;
                outputResult.appendChild(errMsg);
            }
        });
})

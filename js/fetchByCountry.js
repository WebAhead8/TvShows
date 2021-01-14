function fetchByCountry(country) {
  //country code : https://en.wikipedia.org/wiki/ISO_3166-1

  fetch(`http://api.tvmaze.com/schedule?country=${country}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    // if we get a successful response
    .then((data) => {
      for (var i = 0; i < 6; i++) {
        const heading = document.createElement("h2");
        heading.textContent = data[i].show.name;
        nameOutput.appendChild(heading);

        const image = document.createElement("img");
        image.src = data[i].show.image.original;
        image.alt = "";
        image.classList.add("imgSize");
        nameOutput.appendChild(image);

        const genres = document.createElement("h3");
        genres.textContent = data[i].show.genres;
        nameOutput.appendChild(genres);

        const premiered = document.createElement("h3");
        premiered.textContent = data[i].show.premiered;
        nameOutput.appendChild(premiered);

        const rating = document.createElement("h3");
        rating.textContent = data[i].show.rating.average;
        nameOutput.appendChild(rating);

        const summary = document.createElement("h3");
        summary.innerHTML = data[i].show.summary;
        nameOutput.appendChild(summary);
      }
    })
    // if the request is unsuccessful
    .catch((error) => {
      console.log(error);
      if (error.message === "404") {
        errMsg.classList.add("errorMes")
        errMsg.textContent = `⚠️ Couldn't find ${searchName}`;
        nameOutput.appendChild(errMsg);
      } else {
        errMsg.classList.add("errorMes")
        errMsg.textContent = "⚠️ Something went wrong";
        nameOutput.appendChild(errMsg);
      }
    });
}

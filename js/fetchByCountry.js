function fetchByCountry(country) {

  fetch(`https://api.tvmaze.com/schedule?country=${country}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    // if we get a successful response
    .then((data) => {
      for (var i = 0; i < 6; i++) {
        const heading = h2();
        heading.textContent = data[i].show.name;
        nameOutput.appendChild(heading);

        const image = document.createElement("img");
        image.src = data[i].show.image.original;
        image.alt = "No Image";
        image.classList.add("imgSize");
        nameOutput.appendChild(image);

        const genres = h5();
        genres.textContent = data[i].show.genres;
        nameOutput.appendChild(genres);

        const premiered = h5();
        premiered.textContent = "Release Date : " + data[i].show.premiered;
        nameOutput.appendChild(premiered);

        const rating = h5();
        rating.textContent = "Rating : " + data[i].show.rating.average;
        nameOutput.appendChild(rating);

        const summary = h5();
        summary.innerHTML = "Summary : " + data[i].show.summary;
        nameOutput.appendChild(summary);
      }
    })
    // if the request is unsuccessful
    .catch((error) => {
      catchError(error);
    });
}

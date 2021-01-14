function fetchByDate(date) {
  const formattedData = new Date(date).toISOString().replace(/T.*/, "");

  fetch(`https://api.tvmaze.com/schedule/web?date=${formattedData}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((result) => {
      result.forEach((movie) => {
        let showTitle = h2();
        let showImg = document.createElement("img");
        let showType = h5();
        let showLang = h5();
        let showPremiered = h5();
        let summary = h5();
        showTitle.textContent = movie._embedded.show.name;
        showImg.src = movie._embedded.show.image?.original || "No Image";
        showImg.classList.add("imgSize");
        showType.textContent = movie._embedded.show.genres;
        showLang.textContent = movie._embedded.show.language;

        showPremiered.textContent =
          "Date premiered " + movie._embedded.show.premiered;
        summary.innerHTML = movie._embedded.show.summary;


        nameOutput.appendChild(showTitle);
        nameOutput.appendChild(showImg);
        nameOutput.appendChild(showType);
        nameOutput.appendChild(showLang);
        nameOutput.appendChild(showPremiered);
        nameOutput.appendChild(summary);
      });
    })
    .catch((error) => {
      catchError(error);
    });
}

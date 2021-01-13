//const nameOutput = document.querySelector("output");
//const nameinput = document.querySelector("#inputtext");
function fetchByDate(date) {
  const formattedData = new Date(date).toISOString().replace(/T.*/, "");

  fetch(`http://api.tvmaze.com/schedule/web?date=${formattedData}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((result) => {
      result.forEach((movie) => {
        let showTitle = document.createElement("h2");
        let showImg = document.createElement("img");
        let showType = document.createElement("h5");
        let showLang = document.createElement("h5");
        // let showdate = document.createElement("h5");
        let showPremiered = document.createElement("h5");
        let summary = document.createElement("h5");
        showTitle.textContent = movie._embedded.show.name;
        showImg.src = movie._embedded.show.image?.original || "";
        showImg.width = "250";
        showImg.height = "250";
        showType.textContent = movie._embedded.show.genres;
        showLang.textContent = movie._embedded.show.language;

        showPremiered.textContent =
          "Date premiered " + movie._embedded.show.premiered;
        summary.innerHTML = movie._embedded.show.summary;

        // showdate.textContent = "Date " + movie.airdate;

        nameOutput.appendChild(showTitle);
        nameOutput.appendChild(showImg);
        // nameOutput.appendChild(showdate);
        nameOutput.appendChild(showType);
        nameOutput.appendChild(showLang);
        nameOutput.appendChild(showPremiered);
        nameOutput.appendChild(summary);
      });
    })
    .catch((error) => {
      console.log(error);
      if (error.message === "404") {
        nameOutput.textContent = `⚠️ Couldn't find ${searchName}`;
      } else {
        nameOutput.textContent = "⚠️ Something went wrong";
      }
    });
}

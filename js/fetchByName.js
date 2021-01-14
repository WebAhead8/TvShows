function fetchByName(searchName) {
  let showTitle = h2();
  let showLang = h5();
  let showDate = h5();
  let showImg = document.createElement("img");
  let showType = h5();

  fetch(`https://api.tvmaze.com/singlesearch/shows?q=${searchName}`)
    .then((response) => {
  //    if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((result) => {
      showTitle.textContent = result.name;
      showImg.src = result.image.original;
      showImg.alt = "No Image";
      showImg.classList.add("imgSize");
      showLang.textContent = "Language : " + result.language;
      showDate.textContent = "Release Date : " + result.premiered;
      showType.textContent = result.genrescd;

      nameOutput.appendChild(showTitle);
      nameOutput.appendChild(showImg);
      nameOutput.appendChild(showLang);
      nameOutput.appendChild(showDate);
      nameOutput.appendChild(showType);
    })
    .catch((error) => {
      catchError(error);
    });
}
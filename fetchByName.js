
function fetchByName(searchName) {
  //const searchName = document.querySelector("#search").value;
  let showTitle = document.createElement("h2");
  let showLang = document.createElement("h5");
  let showDate = document.createElement("h5");
  let showImg = document.createElement("img");
  let showType = document.createElement("h5");

  fetch(`http://api.tvmaze.com/singlesearch/shows?q=${searchName}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((result) => {
      showTitle.textContent = result.name;
      showImg.src = result.image.original;
      showLang.textContent = result.language;
      showDate.textContent = result.premiered;
      showType.textContent = result.genrescd;

      nameOutput.appendChild(showTitle);
      nameOutput.appendChild(showImg);
      nameOutput.appendChild(showLang);
      nameOutput.appendChild(showDate);
      nameOutput.appendChild(showType);
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

function searchByName (){
    
    const searchName = document.querySelector('#search').value;
    let showTitle = document.createElement("h2");
    let showLang = document.createElement("h5");
    let showDate = document.createElement("h5");
    let showImg = document.createElement("img"); 
    let showType = document.createElement("h5");

    

    fetch(`http://api.tvmaze.com/singlesearch/shows?q=${searchName}`)
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(result => {

            showTitle.textContent = result.name;
            showImg.src = result.image.original;
            showLang.textContent = result.language;
            showDate.textContent = result.premiered;
            showType.textContent = result.genrescd;

            nameOutput.appendChild(showTitle);
            nameOutput.appendChild(showImg);
            nameOutput.appendChild(showLang);
            nameOutput.appendChild(showDate);
            nameOutput.appendChild(showType);
        })
        .catch(error => {
            console.log(error);
            if (error.message === "404") {
                nameOutput.textContent = `⚠️ Couldn't find ${searchName}`;
            } else {
                nameOutput.textContent = "⚠️ Something went wrong";
            }
        });
}
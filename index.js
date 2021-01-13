const searchForm = document.querySelector("form");
const nameOutput = document.querySelector("output");

searchForm.addEventListener("submit", event => {
    event.preventDefault();

    const searchName = document.querySelector('#search').value;
    let showTitle = document.createElement("h2");
    let showLang = document.createElement("h5");
    let showDate = document.createElement("h5");
    let showImg = document.createElement("img");

    nameOutput.innerHTML = "";

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

            nameOutput.appendChild(showTitle);
            nameOutput.appendChild(showImg);
            nameOutput.appendChild(showLang);
            nameOutput.appendChild(showDate);
        })
        .catch(error => {
            console.log(error);
            if (error.message === "404") {
                nameOutput.textContent = `⚠️ Couldn't find ${searchName}`;
            } else {
                nameOutput.textContent = "⚠️ Something went wrong";
            }
        });
})

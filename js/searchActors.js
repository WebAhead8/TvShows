const searchForm = document.querySelector("form");
const nameOutput = document.querySelector("output");
const inputBox = document.querySelector("#actor-name");

searchForm.addEventListener("submit", event => {
    event.preventDefault();

    const searchName = document.querySelector('#actor-name').value;
    let showTitle = document.createElement("h2");
    let counName = document.createElement("h2");
    let birth = document.createElement("h2");

    let showImg = document.createElement("img");
    let line = document.createElement("hr");
    let errMsg = document.createElement("h2");

    nameOutput.innerHTML = "";
    inputBox.value = "";


    fetch(`http://api.tvmaze.com/search/people?q=${searchName}`)
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json()
        })
        .then(result => {
            let actorId = result[0].person.id;
            getActorWork(actorId);
            showTitle.textContent = result[0].person.name;
            showImg.src = result[0].person.image.original;
            counName.textContent = "Country : " + result[0].person.country.name;
            birth.textContent = "Birthdate : " + result[0].person.birthday;


            showImg.classList.add("imgSize");
            showTitle.classList.add("actor-name");


            nameOutput.appendChild(showTitle);
            nameOutput.appendChild(line);
            nameOutput.appendChild(showImg);
            nameOutput.appendChild(counName);
            nameOutput.appendChild(birth);
        })
        .catch(error => {
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
})

function getActorWork(actorId) {

    let works = document.createElement("h2");

    fetch(`http://api.tvmaze.com/people/${actorId}/castcredits?embed=show`)
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json()
                .then(json => {
                    works.textContent = "Best Tv Show : " + json[0]._embedded.show.name;
                    nameOutput.appendChild(works);
                })
                .catch(error => {
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
        })

}


const searchForm = document.querySelector("form");
const nameOutput = document.querySelector("output");

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    nameOutput.innerHTML = "";

    searchByName();
})

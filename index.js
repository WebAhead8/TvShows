const searchForm = document.querySelector("form");
const nameOutput = document.querySelector("output");
const nameinput = document.querySelector("#inputtext");
const radios = document.querySelectorAll("#radiosFieldSet input");

let searchMethod;

radios.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      if (input.value !== "date") {
        document.getElementById("inputtext").setAttribute("type", "text");
      } else {
        document.getElementById("inputtext").setAttribute("type", "date");
      }
      searchMethod = input.value;
    }
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  nameOutput.innerHTML = "";
  if (searchMethod === "date") {
    // fetch data by data
    fetchByDate(nameinput.value);
  } else if (searchMethod === "country") {
    fetchByCountry(nameinput.value);
    // fetch by country
  } else if (searchMethod === "name") {
    fetchByName(nameinput.value);
    // fetch by name
  }

  //const searchdate = document.querySelector("#date").value;
});

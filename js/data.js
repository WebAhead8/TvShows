function catchError(error) {
    console.log(error);
    if (error.message === "404") {
      errMsg.classList.add("errorMes")
      errMsg.textContent = `⚠️ Couldn't find`;
      nameOutput.appendChild(errMsg);
    } else {
      errMsg.classList.add("errorMes")
      errMsg.textContent = "⚠️ Something went wrong";
      nameOutput.appendChild(errMsg);
    }
  }

  function h2() {
    return document.createElement('h2')
  }

  function h5() {
    return document.createElement('h2')
  }
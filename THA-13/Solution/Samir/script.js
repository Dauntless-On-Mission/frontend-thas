var showMeme = document.querySelector("#getmeme");
var outputText = document.getElementById("meme");
var serverURL = "https://meme-api.herokuapp.com/gimme";

function clickEventHandler() {
  fetch(serverURL)
    .then((response) => response.json())
    .then((json) => {
      var translated = json.preview;
      console.log(translated[0])
      outputText.innerHTML = `<img src="${translated[0]}" alt="" />`;
    })
    .catch(() => alert("error occured"));
}

showMeme.addEventListener("click", clickEventHandler);

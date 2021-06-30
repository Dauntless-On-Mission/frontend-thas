var btnTranslate = document.querySelector("#translate-button");
var textInput = document.querySelector("#translate-input");
var outputText = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTransaltionUrl(text) {
  return serverURL + "?text=" + text;
}
function errorHandler(error) {
  alert("error occured");
  console.log("error occured", error);
}

function clickEventHandler() {
  var inputText = textInput.value;

  fetch(getTransaltionUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translated = json.contents.translated;
      outputText.innerText = translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);

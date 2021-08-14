const userInput = document.querySelector("#input-text");
const btn = document.querySelector("#btn-translate");
const translatedOutput = document.querySelector("#output-text");
const url = "https://api.funtranslations.com/translate/doge.json";
const resetbtn = document.querySelector("#reset");

//Error handling
function errorHandler(error) {
    console.log("Error" + error);
    alert("Oops!!Server is currently down.Please try later");

}

//click handling
function inputHandler() {
    const inputText = userInput.value;
    const translatedURL = url + "?" + "text=" + inputText;

    fetch(translatedURL)
        .then(response => response.json())
        .then(json => {

            console.log(json);
            const translatedText = json.contents.translated;
            translatedOutput.innerText = translatedText;
            console.log(translatedText);

        })
        .catch(errorHandler);
}

function resetHandler() {
    userInput.value = "";
    translatedOutput.innerText = "";
}

btn.addEventListener("click", inputHandler);
resetbtn.addEventListener("click", resetHandler);
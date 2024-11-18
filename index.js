// Recommended: All functions declared here










// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code
const titleHead = document.querySelector("title");
const cityTitle = document.querySelector("h2");
const cityUndertitle = document.querySelector("h3");


const enterCity = prompt("Vilken stad?");
let cityWasFound = false;

for (let citiesKey in cities) {
    if (enterCity == cities[citiesKey].name) {
        cityWasFound = true;
        cityTitle.innerHTML = `${enterCity} (${cities[citiesKey].country})`;
        titleHead.innerHTML = enterCity;
        break; // Loopen tar slut när stad hittats eller inte finns.
    } 
}

if (cityWasFound == false) {
    cityTitle.innerHTML = `${enterCity} finns inte i databasen`;
    cityUndertitle.innerHTML = " ";
    titleHead.innerHTML = "Not found";
}
// Recommended: All functions declared here
const titleHead = document.querySelector("title");
const cityTitle = document.querySelector("h2");
const cityUndertitle = document.querySelector("h3");

let enterCity = prompt("Vilken stad?")



// Recommended: constants with references to existing HTML-elements


// Recommended: Ask for the city name and then the rest of the code
for (let keyCity in cities) {
    if (enterCity == cities[keyCity].name) {
        cityWasFound = true;
        cityTitle.innerHTML = `${enterCity} (${cities[keyCity].country})`;
        titleHead.innerHTML = enterCity;
        break;
    }
}

if (cityWasFound == false) {
    cityTitle.innerHTML = `${enterCity} finns inte i databasen`;
    cityUndertitle.innerHTML = " ";
    titleHead.innerHTML = "Not found";
}
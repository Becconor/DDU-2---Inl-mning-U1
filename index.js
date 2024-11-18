// Recommended: All functions declared here










// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code
const titleHead = document.querySelector("title");
const cityTitle = document.querySelector("h2");
const cityUndertitle = document.querySelector("h3");
const cityBox = document.querySelector("#cities");



// Stad sök
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


// Stads rutor

for (let i = 0; i <= cities.length; i++) {
    let cityBoxP = document.createElement("p");
    cityBoxP.classList.add("cityBox");
    cityBoxP.textContent = cities[i].name;
    cityBox.appendChild(cityBoxP);

    if (enterCity == cities[i].name) {
        cityBoxP.classList.add("target");
    } 
    
    if (enterCity == ) {
        cityBoxP.classList.add("closest");
    }

    if (enterCity == ) {
        cityBoxP.classList.add("furthest");
    }
}


// Recommended: All functions declared here
const titleHead = document.querySelector("title");
const cityTitle = document.querySelector("h2");
const cityUndertitle = document.querySelector("h3");
const cityBoxes = document.querySelector("#cities");
const distanceTable = document.querySelector("#table");

let enterCity = prompt("Vilken stad?")
let cityWasFound = false;


function createAllCityBoxes() {
    for (let i = 0; i < cities.length; i++) {
        let cityBox = document.createElement("p");
        cityBox.classList.add("cityBox"); 
        cityBox.textContent = cities[i].name; 
        cityBoxes.appendChild(cityBox); 

        if (enterCity == cities[i].name) {
            cityBox.classList.add("target");
        }
    }
}

createAllCityBoxes();

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


for (let i = 0; i <= 39; i++) {
    for (let j = 0; j <= 39; j++) {
        let gridCell = document.createElement("div"); 
        gridCell.classList.add("cell"); 
        distanceTable.appendChild(gridCell); 

        if (i >= 1 && j >= 1) {
            for (let distanceKey in distances) {
                if (distances[distanceKey].city1 == j - 1 && distances[distanceKey].city2 == i - 1) {
                    gridCell.textContent = distances[distanceKey].distance / 10; 
                }
                if (distances[distanceKey].city2 == j - 1 && distances[distanceKey].city1 == i - 1) {
                    gridCell.textContent = distances[distanceKey].distance / 10; 
                }
            }
        }

        if (i == 0) {
            gridCell.classList.add("head_row"); 
            gridCell.textContent = j - 1; 
        }

        if (j == 0) {
            gridCell.classList.add("head_column"); 
            gridCell.textContent = i - 1; 
        }

        if (i == j) {
            gridCell.textContent = " ";
        }

        if (i % 2 == 1) {
            gridCell.classList.add("even_row"); 
        }

        if (j % 2 == 1 && i != 0) {
            gridCell.classList.add("even_col"); 
        }

        if (j == 0 && i >= 1) {
            gridCell.textContent = cities[i - 1].id + " - " + cities[i - 1].name;
        }
    }
}
// Recommended: All functions declared here


// Recommended: constants with references to existing HTML-elements
const enterCity = prompt("Vilken stad?");
const titleHead = document.querySelector("title");
const cityTitle = document.querySelector("h2");
const cityUndertitle = document.querySelector("h3");
const cityBox = document.querySelector("#cities");
const distanceTable = document.querySelector("#table");
let cityWasFound = false;


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

for (let i = 0; i < cities.length; i++) {
    let cityBoxes = document.createElement("p");
    cityBoxes.classList.add("cityBox"); 
    cityBoxes.textContent = cities[i].name; 
    cityBox.appendChild(cityBoxes); 

    if (enterCity == cities[i].name) {
        cityBoxes.classList.add("target");
    }
}

distanceTable.style.gridTemplateRows = "repeat(39, 1fr)";

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
const flower = getFlower(1)

// Update the DOM
document.querySelector("#currentFlower").innerHTML = `${flower.commonName}`

// Add a new flower to the database
const tulip = {
    "id": 3,  // See what happens when you change this to 1
    "commonName": "Tulip",
    "species": ["Tylennis oriander"]
}

saveFlower(tulip)
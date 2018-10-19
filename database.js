const FlowerDatabase = [
  {
    "id": 1,
    "commonName": "Rose",
    "species": ["Hulthemia", "Hesperrhodos", "Platyrhodon", "Gymnocarpae"]
  },
  {
    "id": 2,
    "commonName": "Daisy",
    "species": ["Aster breweri", "Aster chezuensis", "Aster protoflorian", "Gymnocarpae"]
  }
];

const getFlower = function (id) {
  return FlowerDatabase.find(flower => flower.id === id)
}

const saveFlower = function (flower) {
  // Verify that the state of the flower meets requirements
  if (
      flower.commonName.length > 0
      && flower.hasOwnProperty("id")
      && flower.hasOwnProperty("commonName")
      && flower.hasOwnProperty("species")
      && (FlowerDatabase.find(f => f.id === flower.id) || null) === null
  ) {
      FlowerDatabase.push(flower)
  } else {
      throw "Flower not saved. Missing, or incorrect, required properties."
  }
}
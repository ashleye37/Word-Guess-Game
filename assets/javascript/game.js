var animalOptions = [
    "Porcupine", "Buffalo", "Squirrel", "Otter", "Elephant", "Wallaby", "Alligator", "Albatross", "Racoon", "Antelope", 
    "Armadillo", "Pelican", "Anteater", "Baboon", "Monkey", "Mongoose", "Honey Badger","Dolphin", "Rattlesnake","Rabbit", 
    "Groundhog", "Iguana", "Tortoise", "Lemming", "Leopard", "Penguin", "Meerkat", "Ocelot","Ostrich", "Pheasant",
    "Platypus", "Reindeer", "Rhinoceros", "Roadrunner", "Hedgehog", "Tasmanian Devil", "Sparrow", "Woodpecker", "Sloth","Cockatoo",
];
var guessedLetters = [];
var wins = 0;
var losses = 0;

function startHangman () {
    var animalSelection = Math.floor(Math.random() * (animalOptions.length));
    var blankSpaces = [];
    for (i=0; i < animalOptions[animalSelection].length; i++) {
           blankSpaces.push ("_");
        }
    document.getElementById("animalDisplay").innerHTML = blankSpaces.join(" ");
    console.log (blankSpaces);
    var choicesRemaining = 13;
    document.getElementById("choicesdisplay").innerHTML = choicesRemaining;
}

function playHangman () {
    document.getElementById("winsDisplay").innerHTML = wins;
    document.getElementById("lossesDisplay").innerHTML = losses;
}


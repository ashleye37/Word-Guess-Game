//Create and array of word options.
var animalOptions = [
        "Porcupine", "Buffalo", "Squirrel", "Otter", "Elephant", "Wallaby", "Alligator", "Albatross", "Racoon", "Antelope", 
        "Armadillo", "Pelican", "Anteater", "Baboon", "Monkey", "Mongoose", "Badger","Dolphin", "Rattlesnake","Rabbit", 
        "Groundhog", "Iguana", "Tortoise", "Lemming", "Leopard", "Penguin", "Meerkat", "Ocelot","Ostrich", "Pheasant",
        "Platypus", "Reindeer", "Rhinoceros", "Roadrunner", "Hedgehog", "Alpaca", "Sparrow", "Woodpecker", "Sloth","Cockatoo",
];
var animalIndex;
var selectedAnimal;
var blankSpaces = [];
var letters=[];
var pressedKey = false;
var choicesRemaining = 5;
var losses = 0;
var wins = 0;
var gameOverSound = new Audio("assets/sounds/gameover-sound.wav");
var youWinSound = new Audio("assets/sounds/drum-roll-win.mp3");

//Starting Hangman Game and selecting random animal.
function startHangman () {
    animalIndex = Math.floor(Math.random() * (animalOptions.length));
    selectedAnimal = animalOptions[animalIndex];
    for (i=0; i < selectedAnimal.length; i++) {
           blankSpaces.push ("_");
    };
    document.getElementById("animalDisplay").innerHTML = blankSpaces.join(" ");
    console.log (blankSpaces);
    choicesRemaining = 5;
    document.getElementById("choicesdisplay").innerHTML = choicesRemaining;
    document.getElementById("guessedLetters").innerHTML = "";
    document.getElementById("lossesDisplay").innerHTML = "";
    document.getElementById("winsDisplay").innerHTML = "";
};

//Function that automatically chooses a new random word without making player click "Let's Play".
function resetHangman () {
    animalIndex = Math.floor(Math.random() * (animalOptions.length));
    selectedAnimal = animalOptions[animalIndex];
    blankSpaces = [];
    for (i=0; i < selectedAnimal.length; i++) {
           blankSpaces.push ("_");
    };
    document.getElementById("animalDisplay").innerHTML = blankSpaces.join(" ");
    console.log (blankSpaces);
    choicesRemaining = 5;
    document.getElementById("choicesdisplay").innerHTML = choicesRemaining;
    document.getElementById("guessedLetters").innerHTML = "";
};

//Documents the key choices that the player makes and causes the choices remaining field to go down by one.
document.onkeypress = function(evt) {
    var evt = evt || window.event;
    charCode = evt.keyCode || evt.which,
    letters = String.fromCharCode(charCode);
    document.getElementById("guessedLetters").innerHTML += letters + " ";
    pressedKey = false;
    for (var i = 0; i < selectedAnimal.length; i++) {
        if (selectedAnimal[i].toLowerCase() === letters.toLowerCase()) {
            pressedKey = true;
            blankSpaces.splice(i, 1, letters);
            document.getElementById("animalDisplay").innerHTML= blankSpaces.join(" ");
        }
    }
    if (!pressedKey) {
        choicesRemaining= choicesRemaining -1;
        console.log (choicesRemaining);
        document.getElementById("choicesdisplay").innerHTML = choicesRemaining;
    }

    if (choicesRemaining === 0) {
        losses = losses + 1;
        document.getElementById("lossesDisplay").innerHTML = losses;
        gameOverSound.play();
        resetHangman();
    }

    if (selectedAnimal.toLowerCase() == blankSpaces.join("").toLowerCase()) {
        wins = wins + 1;
        document.getElementById("winsDisplay").innerHTML = wins;
        youWinSound.play();
        document.getElementById("animalDisplay").innerHTML = "";
        resetHangman();
    }
};



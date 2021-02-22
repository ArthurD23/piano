
var numberOfPianoButtons = document.querySelectorAll(".piano").length;

for (var i = 0; i < numberOfPianoButtons; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "c":
      var cnote = new Audio("sounds/C Note.wav");
      cnote.play();
      break;

    case "d":
      var dnote = new Audio("sounds/D Note.wav");
      dnote.play();
      break;

    case "e":
      var enote = new Audio('sounds/E Note.wav');
      enote.play();
      break;

    case "f":
      var fnote = new Audio('sounds/F Note.wav');
      fnote.play();
      break;

    case "g":
      var gnote = new Audio('sounds/G Note.wav');
      gnote.play();
      break;

    case "a":
      var anote = new Audio('sounds/A Note.wav');
      anote.play();
      break;

    case "b":
      var bnote = new Audio('sounds/B Note.wav');
      bnote.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

var numberofdrums = document.querySelectorAll(".drum").length;

// sound by just clicking 

for (var i = 0; i < numberofdrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var innerhtmlbtn = this.innerHTML;
    makeSound(innerhtmlbtn);
})};

 // sound by keypressing

document.addEventListener("keydown",function(event){  //this part detects which key is pressed then that is given as a parameter to makeSound which eventually makes sound
  
 makeSound(event.key);  // event gives the all the information about which key is pressed so event.key gives the exact key whcih is pressed

});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
  }
};

// in this makeSound function is created for which the click and keypress both are functional 

// in simple words we just have to give input to makeSound function which key is pressed 
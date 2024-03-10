/*document.querySelector(".set").addEventListener("click", GotClicked)
function GotClicked(){
    alert("i got clicked!");
}*/

var length=document.querySelectorAll(".drum").length;
for(var i=0; i<length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var ButtonInnerHtml = this.innerHTML;

    buttonPressed(ButtonInnerHtml);

    makeSound(ButtonInnerHtml);

    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
});

buttonPressed(event.key);

function makeSound(key){
    switch(key){
        case "w":
            var carsh= new Audio("sounds/crash.mp3");
            carsh.play();
            break;  
            case "a":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;  
            case "s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break; 
            case "d":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;  
            case "j":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;  
            case "k":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;  
            case "l":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;  
            default:
                console.error("Invalid button clicked");
                break;
    }
    
}

function buttonPressed(press){
    var activeButton = document.querySelector("."+ press);

    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 300);     
}
const kick = document.querySelector("#kick");
const ride = document.querySelector("#ride");
const snare = document.querySelector("#snare");
const hat = document.querySelector("#hat");
const kicksound = document.querySelector("#kicksound");
const ridesound = document.querySelector("#ridesound");
const snaresound = document.querySelector("#snaresound");
const hatsound = document.querySelector("#hatsound");

kick.addEventListener("pointerdown", function() {
    kicksound.currentTime = 0;
    kicksound.play();
    kick.classList.add("pressed");});
ride.addEventListener("pointerdown", function() {
    ridesound.currentTime = 0;
    ridesound.play();
    ride.classList.add("pressed");});
snare.addEventListener("pointerdown", function() {
    snaresound.currentTime = 0;
    snaresound.play();
    snare.classList.add("pressed");});

    hat.addEventListener("pointerdown", function() {
    hatsound.currentTime = 0;
    hatsound.play();
    hat.classList.add("pressed");});

window.addEventListener("keydown", function(event) {
    if(event.key === "A" || event.key === "a" && !event.repeat) {
        kicksound.currentTime = 0;
        kicksound.play();
        kick.classList.add("pressed");
    }
    if(event.key === "S" || event.key === "s" && !event.repeat) {
        ridesound.currentTime = 0;
        ridesound.play();
        ride.classList.add("pressed");
    }
    if(event.key === "D" || event.key === "d" && !event.repeat) {
        snaresound.currentTime = 0;
        snaresound.play();
        snare.classList.add("pressed");
    }
    if(event.key === "F" || event.key === "f" && !event.repeat) {
        hatsound.currentTime = 0;
        hatsound.play();
        hat.classList.add("pressed");
    }

})

function removeTransition() {
    this.classList.remove("pressed");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))

if(!screen.innerHeight > window.innerWidth) {
    alert("Switch orientation");
}



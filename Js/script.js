// Get Elements
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const introBox = document.querySelector(".intro-box");
const vehiclesSounds = document.querySelectorAll("audio");
const track = document.querySelector(".track");

// Global Variables
let clrTimeOut;



// Function to Get Random Number Between Given Range
const randNumInRange = (lower, upper) => {

    if (lower >= upper)
        return lower;

    let num = Math.floor(Math.random() * 10000000);

    return num % (upper - lower + 1) + lower;

}


// Function to Play Vehicles Horn Sounds After Few Time
const playHorn = () => {

    // Play Horn 
    vehiclesSounds[randNumInRange(0, 1)].play();

    // Call Again 
    clrTimeOut = setTimeout(playHorn, randNumInRange(1000, 6000));
}


// Add Click Event On Play Button to Play Animation
playBtn.addEventListener('click', () => {

    // Hide Intro Box
    introBox.style.display = 'none';

    // Play Sounds
    const [, , bikeSound, carSound] = vehiclesSounds;
    carSound.play();
    carSound.loop = true;
    carSound.volume = 0.3;
    bikeSound.play();
    bikeSound.loop = true;
    playHorn();

})


// Add Click Event On Pause Button to Pause Animation
pauseBtn.addEventListener('click', () => {

    // Pause All Sounds
    const [, , bikeSound, carSound] = vehiclesSounds;
    carSound.pause();
    bikeSound.pause();
    clearTimeout(clrTimeOut);


    // Show Intro Box
    introBox.style.display = 'flex';

    // Get Intro Message to Change Message
    introBox.querySelector(".intro-message").innerHTML = "✌ Hey!! <br> I Hope You Are 😍 Enjoying..."

    // Change Text of Play Button
    playBtn.innerText = "Play Again";

})




// Detect When Device Orientation Is Portrait And Perform Following Tasks
const portrait = window.matchMedia('(orientation: portrait) and (max-width:1000px)');

portrait.addEventListener('change', (event) => {

    // Check if orientation is portrait
    if (event.matches) {

        // Pause All Sounds
        const [, , bikeSound, carSound] = vehiclesSounds;
        carSound.pause();
        bikeSound.pause();
        clearTimeout(clrTimeOut);

    } else {

        if (introBox.style.display == "none") {

            // Play Sounds
            const [, , bikeSound, carSound] = vehiclesSounds;
            carSound.play();
            carSound.loop = true;
            carSound.volume = 0.3;
            bikeSound.play();
            bikeSound.loop = true;
            playHorn();

        }

    }

});








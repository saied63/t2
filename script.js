// Create an audio object
const sound = new Audio('https://www.soundjay.com/button/beep-07.wav');

// Add event listener to the button
document.getElementById('play-sound-btn').addEventListener('click', () => {
    sound.play();
});
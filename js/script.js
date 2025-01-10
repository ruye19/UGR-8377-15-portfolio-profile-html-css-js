// Toggle Menu for Mobile View
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".navmenu");

  menuToggle.addEventListener("click", function () {
     navMenu.classList.toggle("active"); 
  });

  // Typed.js Effect for Hero Section
  const typedElement = document.querySelector(".typed");
  if (typedElement) {
    const typed = new Typed(".typed", {
      strings: typedElement.getAttribute("data-typed-items").split(", "),
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
    });
  }
});

document.querySelectorAll('.audio-item').forEach(item => {
  const audio = item.querySelector('.audio-control');
  const thumbnail = item.querySelector('.audio-thumbnail');

  thumbnail.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});

function toggleAudio(audioItem) {
  var audioPlayer = audioItem.querySelector('.audio-player');
  
  // Check if the audio is paused or playing
  if (audioPlayer.paused) {
    // If paused, play the audio
    audioPlayer.play();
  } else {
    // If playing, pause the audio
    audioPlayer.pause();
    audioPlayer.currentTime = 0;  // Reset to the beginning
  }
}

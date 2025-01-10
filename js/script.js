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




// Function to display loader
function showLoader() {
  document.getElementById("loader").style.display = "block";
}

// Function to hide loader
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// Function to show error message
function showError() {
  document.getElementById("error-message").style.display = "block";
}

// Function to hide error message
function hideError() {
  document.getElementById("error-message").style.display = "none";
}

// Function to show success message
function showSuccess() {
  document.getElementById("sent-message").style.display = "block";
}

// Function to hide success message
function hideSuccess() {
  document.getElementById("sent-message").style.display = "none";
}

// Function to handle form submission
function submitMessage(event) {
  event.preventDefault(); // Prevent form from submitting immediately
  
  // Get the input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Reset messages
  hideError();
  hideSuccess();

  // Validate fields
  if (name === "" || email === "" || subject === "" || message === "") {
      showError();  // Show error message if any field is empty
  } else {
      showLoader();  // Show loader when the form is being processed

      // Simulate form submission delay (e.g., 2 seconds)
      setTimeout(function() {
          showSuccess();  // Show success message when submission is complete
          hideLoader();   // Hide the loader
      }, 2000);  // Simulate 2 seconds delay
  }
}

document.getElementById("contactForm").addEventListener("submit", submitMessage);


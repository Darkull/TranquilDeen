"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const bgMusic = document.getElementById("bg-music");
  const texts = document.querySelectorAll(".text-container p");
  const nextBtn = document.getElementById("next-btn");
  const playBtn = document.getElementById("play-btn");
  let currentIndex = 0;
  let isPlaying = false;

  // Set the initial volume (between 0 and 1)
  bgMusic.volume = 0.5; // Adjust this value as needed

  // Load the audio file
  bgMusic.load();

  // Autoplay background music
  document.addEventListener("click", function () {
    if (!isPlaying) {
      bgMusic.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
      isPlaying = true;
    }
  });

  // Hide all paragraphs except the first one
  texts.forEach((text, index) => {
    if (index !== 0) {
      text.style.display = "none";
    }
  });

  nextBtn.addEventListener("click", showNextText);
  playBtn.addEventListener("click", playAllTexts);

  function showNextText() {
    texts[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % texts.length;
    texts[currentIndex].style.display = "block";
  }

  function playAllTexts() {
    isPlaying = true;
    playNextText();
  }

  function playNextText() {
    if (isPlaying) {
      showNextText();
      setTimeout(playNextText, 5000); // Adjust the delay (in milliseconds) between texts
    }
  }
});
("use strict");

document.addEventListener("DOMContentLoaded", function () {
  const bgMusic = document.getElementById("bg-music");
  const texts = document.querySelectorAll(".text-container p");
  const nextBtn = document.getElementById("next-btn");
  const playBtn = document.getElementById("play-btn");
  let currentIndex = 0;
  let isPlaying = false;

  // Set the initial volume (between 0 and 1)
  bgMusic.volume = 0.2; // Adjust this value as needed

  // Load the audio file
  bgMusic.load();

  // Autoplay background music
  document.addEventListener("click", function () {
    if (!isPlaying) {
      bgMusic.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
      isPlaying = true;
    }
  });

  // Hide all paragraphs except the first one
  texts.forEach((text, index) => {
    if (index !== 0) {
      text.style.display = "none";
    }
  });

  nextBtn.addEventListener("click", showNextText);
  playBtn.addEventListener("click", playAllTexts);

  function showNextText() {
    texts[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % texts.length;
    texts[currentIndex].style.display = "block";
  }

  function playAllTexts() {
    isPlaying = true;
    playNextText();
  }

  function playNextText() {
    if (isPlaying) {
      showNextText();
      setTimeout(playNextText, 2000); // Adjust the delay (in milliseconds) between texts
    }
  }
});

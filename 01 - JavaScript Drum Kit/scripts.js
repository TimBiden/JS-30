window.addEventListener("keydown", function(e) {
  //Get key code data
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // If not a valid key, escape function
  if (!audio) return;

  audio.currentTime = 0; // Reset play time to beginning
  audio.play(); // Play audio

  key.classList.add("playing");
});

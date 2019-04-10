window.addEventListener("keydown", function(e) {
  console.log("Event is " + e.keyCode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
});

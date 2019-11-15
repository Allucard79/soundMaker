window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#4cd137",
    "#e84118",
    "#fbc531",
    "#9c88ff",
    "#00a8ff",
    "#273c75"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBalls(index);
    });
  });

  const createBalls = index => {
    const ball = document.createElement("div");
    visual.appendChild(ball);
    ball.style.backgroundColor = colors[index];
    ball.style.animation = "jump 1s ease";
    ball.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});


const particleLayer = document.getElementById("particles");
const petalLayer = document.getElementById("petals");
const replayButton = document.getElementById("replay");

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticles() {
  particleLayer.replaceChildren();

  if (reducedMotion) return;

  for (let i = 0; i < 65; i++) {
    const spark = document.createElement("span");
    spark.className = "spark";

    spark.style.left = random(0, 100) + "%";
    spark.style.setProperty("--size", random(2, 6) + "px");
    spark.style.setProperty("--duration", random(6, 13) + "s");
    spark.style.setProperty("--delay", random(-13, 0) + "s");
    spark.style.setProperty("--drift", random(-100, 100) + "px");

    particleLayer.appendChild(spark);
  }
}

function createPetals() {
  petalLayer.replaceChildren();

  if (reducedMotion) return;

  for (let i = 0; i < 18; i++) {
    const petal = document.createElement("span");
    petal.className = "falling-petal";

    petal.style.setProperty("--left", random(0, 100) + "%");
    petal.style.setProperty("--size", random(8, 17) + "px");
    petal.style.setProperty("--duration", random(8, 15) + "s");
    petal.style.setProperty("--delay", random(-15, 0) + "s");
    petal.style.setProperty("--sway", random(-100, 100) + "px");

    petalLayer.appendChild(petal);
  }
}

function replayAnimation() {
  // Reload the page to restart every animation from the beginning.
  window.location.reload();
}

replayButton.addEventListener("click", replayAnimation);

createParticles();
createPetals();

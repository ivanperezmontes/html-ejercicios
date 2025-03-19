const bars = {
  eat: document.getElementById("eat-bar"),
  play: document.getElementById("play-bar"),
  fight: document.getElementById("fight-bar"),
  sleep: document.getElementById("sleep-bar"),
  general: document.getElementById("general-bar"),
};
const progress = {
  eat: getRandomProgress(),
  play: getRandomProgress(),
  fight: getRandomProgress(),
  sleep: getRandomProgress(),
  general: 0,
};

function updateGeneralBar() {
  const average =
    (progress.eat + progress.play + progress.fight + progress.sleep) / 4;
  updateBar(bars.general, average);
}
function getRandomProgress() {
  return Math.floor(Math.random() * 101);
}
function updateBar(bar, progress) {
  bar.style.width = `${progress}%`;

  if (progress <= 35) {
    bar.style.backgroundColor = "red";
  } else if (progress <= 50) {
    bar.style.backgroundColor = "orange";
  } else if (progress <= 75) {
    bar.style.backgroundColor = "yellow";
  } else {
    bar.style.backgroundColor = "green";
  }
}

function handleClick(category, numero) {
  if (progress[category] < 100) {
    if (progress[category] + numero < 100) {
      progress[category] += numero;
    } else {
      progress[category] = 100;
    }
    updateBar(bars[category], progress[category]);
    updateGeneralBar();
  }
}
function reduceProgress() {
  for (let category in progress) {
    if (progress[category] > 0) {
      progress[category] -= 3;
      updateBar(bars[category], progress[category]);
      updateGeneralBar();
    }
  }
}

setInterval(reduceProgress, 2000);
document
  .getElementById("kiwi")
  .addEventListener("click", () => handleClick("eat", 25));
document
  .getElementById("zanahoria")
  .addEventListener("click", () => handleClick("eat", 30));
document
  .getElementById("flor")
  .addEventListener("click", () => handleClick("eat", 10));

document
  .getElementById("hilo")
  .addEventListener("click", () => handleClick("play", 15));
document
  .getElementById("pintar")
  .addEventListener("click", () => handleClick("play", 30));
document
  .getElementById("bucear")
  .addEventListener("click", () => handleClick("play", 50));

document
  .getElementById("cocodrilo")
  .addEventListener("click", () => handleClick("fight", 40));
document
  .getElementById("mono")
  .addEventListener("click", () => handleClick("fight", 30));
document
  .getElementById("raton")
  .addEventListener("click", () => handleClick("fight", 10));

document
  .getElementById("mucho")
  .addEventListener("click", () => handleClick("sleep", 40));
document
  .getElementById("fiesta")
  .addEventListener("click", () => handleClick("sleep", -30));

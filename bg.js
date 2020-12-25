// 1 - Fairmont Chateau Lake Louise, Lake Louise, Canada
// 2 - Lampuuk Beach, Aceh, Indonesia
// 3 - Manchester, Uk
// 4 - Pinozero Lake, Murmansk Oblast, Polyarnye Zori, Russia
// 5 - Pragser Wildsee, Prags, Südtirol, Italy
// 6 - Rocky Mountain, alberta, canada

const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImageLoad() {
  console.log("finished loading");
}

function paintImage(imgNum) {
  const image = new Image();
  image.src = `./images/${imgNum}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

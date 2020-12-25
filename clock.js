const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector("h1");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  localStorage.setItem("hour", hour);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

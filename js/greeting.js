const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  askingNameMsg = form.querySelector("h2"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(name) {
  localStorage.setItem(USER_LS, name);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  askingNameMsg.classList.add("hiding");
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function getGreetMessage() {
  const currentHour = parseInt(localStorage.getItem("hour"));
  let greetMessage;
  if (currentHour >= 5 && currentHour < 12) {
    greetMessage = "Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greetMessage = "Afternoon";
  } else {
    greetMessage = "Evening";
  }
  return greetMessage;
}

function paintGreeting(name) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greetMessage = getGreetMessage();
  greeting.innerHTML = `Good ${greetMessage}, ${name}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

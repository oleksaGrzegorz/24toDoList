{
  const buttonElement = document.querySelector(".js-button");
const taskListElement = document.querySelector(".taskList");
let inputElement = document.querySelector(".input");
let tasks = [
  {
    name: "kup mleko",
    done: false,
  },
  {
    name: "kup chleb",
    done: false,
  },
];

function init() {
  console.log("init");
  buttonElement.addEventListener("click", onFormSubmit);
  render();
}

function render() {
  console.log("render");
  taskListElement.innerHTML = tasks
    .map(
      (zadanie) =>
      `<li>${zadanie.name}
        <button class="js-markDoneButton">Zakończ</button>
        <button>Usuń</button>
      </li>`
    )
    .join("");
  inputElement.value = "";

  const markDoneButtons = document.querySelectorAll(".js-markDoneButton");
  markDoneButtons.forEach((button, index) => {
    button.addEventListener("click", () => markAsDone(index));
  });
}

function onFormSubmit(event) {
  event.preventDefault();
  addTask();
}

function addTask() {
  const trimmedInput = inputElement.value.trim();
  if (trimmedInput) {
    tasks.push({name: trimmedInput});
  }
  render();
}



function markAsDone() {
console.log("Kliknieto przycisk zakoncz");
};

init();
}

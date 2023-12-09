const buttonElement = document.querySelector(".js-button");
const taskListElement = document.querySelector(".taskList");
let inputElement = document.querySelector(".input");
let tasks = [];

const markDoneButtons = document.querySelectorAll(".markDoneButton");

function markTaskDone() {
console.log("kliknieto");
};


function addTask(event) {
  event.preventDefault();
  tasks.push(inputElement.value);
  taskListElement.innerHTML = tasks
    .map(
      (zadanie) =>
        `<li>${zadanie}<button class="markDoneButton">Zakończ</button><button>Usuń</button></li>`
    )
    .join("");
  inputElement.value = "";

  markDoneButtons.forEach((button) => {
    button.addEventListener("click", markTaskDone);
  });
};

buttonElement.addEventListener("click", addTask);
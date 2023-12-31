{
  const buttonElement = document.querySelector(".js-button");
const taskListElement = document.querySelector(".taskList");
let inputElement = document.querySelector(".input");
let tasks = [
  {
    name: "kup mleko",
    done: true,
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
      `<li class="${zadanie.done ? 'done' : 'xxx'}">${zadanie.name}
        <button class="js-markDoneButton">Zakończ</button>
        <button class="js-removeButton">Usuń</button>
      </li>`
    )
    .join("");
  inputElement.value = "";

  const markDoneButtons = document.querySelectorAll(".js-markDoneButton");
  markDoneButtons.forEach((button, index) => {
    button.addEventListener("click", () => markTaskAsDone(index));
  });

  const removeButtons = document.querySelectorAll(".js-removeButton");
 removeButtons.forEach((button, index) => {
    button.addEventListener("click", () => removeTask(index));
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


function markTaskAsDone(index) {
  tasks[index].done = !tasks[index].done;
console.log(`ukonczone? ${index} - ${tasks[index].done}`);
render();
};

function removeTask(index) {
  console.log(`Kliknieto przycisk usun ${index}`);
};

init();
}

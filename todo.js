const inputDia = document.getElementById("todo-dia-input");
const listDia = document.getElementById("todo-dia-ul");
const inputNoite = document.getElementById("todo-noite-input");
const listNoite = document.getElementById("todo-noite-ul");

function addTask() {
  if (inputDia.value === "") {
    alert("Você deve escrever uma tarefa!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputDia.value;
    listDia.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
  inputDia.value = "";
}

listDia.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

function addTaskNoite() {
  if (inputNoite.value === "") {
    alert("Você deve escrever uma tarefa!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputNoite.value;
    listNoite.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
  inputNoite.value = "";
}

listNoite.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

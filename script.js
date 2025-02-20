const input = document.querySelector(".input");
const addTask = document.querySelector(".addTask");
const taskList = document.querySelector(".taskList");

addTask.addEventListener("click", (e) => {
  if (input.value.trim() === "") {
    e.preventDefault();
    window.alert("Please Enter a task");
  } else {
    let li = document.createElement("li");
    li.textContent = input.value.trim();
    let icon = document.createElement("span");
    let cross = document.createElement("span");
    icon.classList.add("complete");
    li.appendChild(icon);
    li.appendChild(cross);
    cross.classList.add("cross");
    taskList.appendChild(li);
    deleteTask(cross);
    completeTask(icon);
    storeTask();
    input.value = "";
  }
});

const storeTask = () => {
  localStorage.setItem("Task", taskList.innerHTML);
};

const deleteTask = (dtask) => {
  document.querySelectorAll(".cross").forEach((c) => {
    c.addEventListener("click", (e) => {
      e.target.closest("li").remove();
      storeTask();
    });
  });
};

const completeTask = (ctask) => {
  document.querySelectorAll(".complete").forEach((cir) => {
    cir.addEventListener("click", (e) => {
      e.target.closest("li").classList.contains("checked")
        ? e.target.closest("li").classList.remove("checked")
        : e.target.closest("li").classList.add("checked");
      storeTask();
    });
  });
};

const showTask = () => {
  if (localStorage.getItem("Task") == null) {
    taskList.innerHTML = "Your Tasks are ";
  } else {
    taskList.innerHTML = "";
    let task = localStorage.getItem("Task");
    taskList.innerHTML += task;
    completeTask();
    deleteTask();
  }
};

showTask();

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();   //prevents auto reload

  const task = todoInput.value.trim();
  if (task===""){
    alert("kindly enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <div class="todo-buttons">
      <button class="btn done">Done</button>
      <button class="btn remove">Remove</button>
    </div>
  `;

  todoList.appendChild(li);
  todoInput.value = "";   //reset input value
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const span = e.target.closest("li").querySelector("span");
    
    if(span.style.textDecoration == "line-through"){
      span.style.textDecoration = "none";
      e.target.textContent = "Done";
    }else{
      span.style.textDecoration = "line-through";
      e.target.textContent = "Undone";
    }
  }

  if (e.target.classList.contains("remove")) {
    e.target.closest("li").remove();
  }
});

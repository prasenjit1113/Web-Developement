function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.onclick = () => {
    li.style.textDecoration = "line-through";
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  // Append both buttons
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  // Add li to the list
  document.getElementById("taskList").appendChild(li);

  // Clear input
  taskInput.value = "";
}

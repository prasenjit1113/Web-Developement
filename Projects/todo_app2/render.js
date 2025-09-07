import store from "./store.js";

function render(){
    const todos = document.querySelector(".todos");
    todos.innerHTML = `
        <li class="todo" data-id="1">
            <span class="todo-title"> Todo 1 </span>
            <div class="toggle-delete">
                <input type="checkbox" name="completed" class="todo-checkbox"/>
                <button class="delete-todo-button">x</button>
            </div>
        </li>;
    `
}

export default render;
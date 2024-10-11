const todoList = [];

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();" 
      class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function addTodo() {
    const inputElem = document.querySelector(".js-name-input");
    // retrieves the value entered in the selected input element
    const name = inputElem.value;

    const dateElem = document.querySelector(".js-due-date-input");
    const dueDate = dateElem.value;

    todoList.push({
        name, //  name: name,
        dueDate // dueDate: dueDate 
    });
    inputElem.value = '';
    
    renderTodoList();
}
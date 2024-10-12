const todoList = [];

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  })
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    // querySelectorAll gives out all of the delete buttons in contrast to querySelector which gives only the first delete button
    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });
      });
}

// same functionality as onclick=addTodo() in html
document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => { 
    addTodo();
  });

function addTodo() {
  const inputElem = document.querySelector(".js-name-input");
  // retrieves the value entered in the selected input element
  const name = inputElem.value;

  const dateElem = document.querySelector(".js-due-date-input");
  const dueDate = dateElem.value;

  // if string is emptry or has a bunch of white-space
  if(name.trim().length === 0) {
    return;
  } 

  todoList.push({
    name, //  name: name,
    dueDate // dueDate: dueDate 
  });
  inputElem.value = '';
  renderTodoList();
}
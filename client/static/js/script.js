var ul = document.getElementById('ul');

function addTodo(todo) {
    var li = document.createElement('li');
    li.innerHTML = todo;
    var buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = "X";
    buttonDelete.classList.add('delete');
    buttonDelete.onclick = function () {
        li.remove();
    }
    li.append(buttonDelete);
    ul.appendChild(li);
}

fetch('/api/todos')
    .then((response) => {
        return response.json();
    })
    .then((todos) => {
        console.log(todos);

        todos.forEach(function (todo) {
            addTodo(todo.todo)
        })
    })

var btn = document.getElementById('btnAdd');

btn.onclick = function () {
    var input = document.getElementById('newTodo');
    var value = input.value;
    addTodo(value);
    input.value = '';
}

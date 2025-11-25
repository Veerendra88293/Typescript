var input = document.getElementById("inputname");
var addBtn = document.getElementById("addBtn");
var todoList = document.getElementById("para");
var todo = [];
var count = 0;
function appendTodo(obj) {
    console.log(obj);
    var li = document.createElement("li");
    li.innerHTML = obj.name;
    li.id = obj.id.toString();
    todoList.appendChild(li);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = obj.id.toString();
    li.appendChild(checkbox);
    checkbox.onclick = function () {
        if (checkbox.checked) {
            li.classList.add('line');
        }
        else {
            li.classList.remove('line');
        }
    };
    var buttondlt = document.createElement("button");
    buttondlt.innerText = 'delete';
    li.appendChild(buttondlt);
    buttondlt.addEventListener('click', function () {
        var li = document.getElementById(obj.id.toString());
        todoList.removeChild(li);
    });
}
function addTodo(name) {
    count++;
    var objTodo = {
        id: count,
        name: name
    };
    todo.push(objTodo);
    appendTodo(objTodo);
}
addBtn.addEventListener("click", function () {
    var title = input.value.trim();
    if (title) {
        addTodo(title);
        input.value = "";
    }
});

const input = document.getElementById("inputname") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const todoList = document.getElementById("para") as HTMLParagraphElement;
 
type Todotype ={
    id:number;
    name:string
}
let todo:Todotype[]=[];
let count=0
function appendTodo(obj:Todotype):void{
    console.log(obj)
        const li = document.createElement("li");
        li.innerHTML =obj.name
        li.id = obj.id.toString();
        todoList.appendChild(li)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id=obj.id.toString();
        li.appendChild(checkbox)
        checkbox.onclick=function():void{
            if(checkbox.checked){
                li.classList.add('line')
            }else{
                li.classList.remove('line')
            }

        }
        const buttondlt= document.createElement("button");
        buttondlt.innerText='delete'
        li.appendChild(buttondlt)
        buttondlt.addEventListener('click',()=>{
                let li = document.getElementById(obj.id.toString()) as HTMLLIElement
                todoList.removeChild(li)
        })
        
}
function addTodo(name:string):void{
    count++
    const objTodo:Todotype ={
            id:count,
            name:name
    }
    todo.push(objTodo)
    appendTodo(objTodo)
}




addBtn.addEventListener("click", () => {
  const title:string = input.value.trim();
  if (title) {
    addTodo(title);
    input.value = "";
  }
});
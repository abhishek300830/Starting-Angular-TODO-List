import { Component} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  localItem: string;

  todosArray:Todo[];
  constructor(){
    this.localItem=localStorage.getItem("todos")!;

    if(this.localItem==null){
      this.todosArray=[] 
    }else{
      this.todosArray=JSON.parse(this.localItem);
    }

  }
// todo is event conming from todo.component.ts
  deleteTodo(todo:Todo){
    console.log("todo",todo);
    const index=this.todosArray.indexOf(todo);
    this.todosArray.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todosArray));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todosArray.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todosArray))
  }
  toggleTodo(todo:Todo){
    const index=this.todosArray.indexOf(todo);
    this.todosArray[index].active= !this.todosArray[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todosArray))
  }

}

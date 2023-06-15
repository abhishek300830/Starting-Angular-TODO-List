import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string | undefined;
  description:string | undefined;
  // emitter
  @Output() todoAdd: EventEmitter<Todo> =new EventEmitter();

  onSubmit(){
    const todo={
      sno:8,
      title:this.title,
      desc:this.description,
      active:true
    }
    this.todoAdd.emit(todo);
  }

}

import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  // added new by quick fix
  @Input()
  todo: Todo = new Todo;
  @Input() i:Number=new Number;

  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckBox:EventEmitter<Todo>=new EventEmitter();

  constructor(){
    
  }
  onDeleteClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("On click has been triggered");
  }
  onCheckBoxClick(todo:Todo){
    // console.log("hull",todo)
    this.todoCheckBox.emit(todo);
    
  }
}

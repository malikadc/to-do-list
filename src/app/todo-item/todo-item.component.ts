import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';


export interface TodoItem {
  title: string;
  completed?: boolean;
}

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      <input type="checkbox"/>

      {{ item.title }}

      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>  
    </div>


  `,
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }


  removeItem() {
    this.remove.emit(this.item);
  }
}

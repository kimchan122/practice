import { Component, Input } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItemComponent],
  template: `
    <button class="btn btn-secondary" (click)="onAddItem()">Add List</button>
    <div>
      @for(item of todoList; track item.itemId){
      <app-todo-list-item
        [index]="item.index"
        [itemName]="item.name"
      ></app-todo-list-item>
      }
    </div>
  `,
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todoList = [{ index: 0, name: 'Item1', itemId: 0 }];

  onAddItem() {
    const newItem = {
      index: this.todoList.length,
      name: `Item ${this.todoList.length + 1}`,
      itemId: this.todoList.length,
    };
    this.todoList.push(newItem);
  }
}

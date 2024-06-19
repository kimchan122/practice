import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss',
})
export class TodoListItemComponent {
  @Input() index!: number;
  @Input() itemName: string = '';
  itemId: number = 0;

  ngOnInit() {
    this.itemId = this.index;
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `<p>{{ itemId }}: {{ itemName }}, {{ index }}</p>
    @if(index===3){
    <p>{{ idemId }} INDEX is 333.</p>
    } @else if(index===4) {
    <p>{{ itemId }} INDEX is 444.</p>
    }
    <p *ngIf="index === 2">{{ itemId }} INDEX is 222.</p>`,
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

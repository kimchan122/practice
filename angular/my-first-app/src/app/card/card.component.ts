import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() index!: number;
  cardId: number = 0;
  cardStatus: string = 'disconnected';

  constructor() {
    this.cardId = Math.random() * 100;
    this.cardStatus = this.cardId > 50 ? 'connected' : 'disconnected';
  }

  getCardStatus() {
    return this.cardId > 50 ? 'connected' : 'disconnected';
  }

  getColor() {
    return this.cardStatus === 'connected' ? 'green' : 'yellow';
  }
}

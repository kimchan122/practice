import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  cardName = '';
  cardStatus = 'disconnected';
  cards = [{ name: '', status: '' }];

  onCreateCard() {
    this.cards.push({ name: this.cardName, status: this.cardStatus });
  }
}

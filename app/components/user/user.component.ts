import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() toggleTasks = new EventEmitter<string>();

  get imagePath() {
    return 'assets/' + this.user.avatar;
  } 
  logSelected = () => {
    console.log('value for selected property');
    console.log(this.selected);
  };

  onButtonClick() {
    // Toggle logic based on your requirements
    this.toggleTasks.emit(this.user.id);
  }

} 

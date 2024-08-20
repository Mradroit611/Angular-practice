import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss'
})
export class AComponent {
  // p = 6;
  constructor(public CountService : CounterService){}

  // getCount(){
  //  this.CountService.getcounter();
  // }
}

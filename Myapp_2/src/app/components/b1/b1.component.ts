import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { B2Component } from '../b2/b2.component';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [B2Component],
  providers:[CounterService], //if we don't want to share same instance of services
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.scss'
})
export class B1Component {
  constructor(public CountService : CounterService){}
}

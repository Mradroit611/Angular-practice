import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name:string =  "sanjay";

  users = [
    {name: "sanjay", isSingle: true, salary: 10000},
    {name: "adroit", isSingle: true, salary: 50000},
    {name: "sandy", isSingle: false, salary: 200000}
  ]

  
}

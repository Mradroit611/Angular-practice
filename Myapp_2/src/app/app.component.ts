import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CommonModule } from '@angular/common';
import {User} from '../model'
import { JokeComponent } from './components/joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommonModule, JokeComponent, AComponent, B1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = [
    {name: "sanjay", isSingle: true, salary: 250000, phoneNumber: 9868980011},
    // {name: "adroit", isSingle: false, salary: 900000},
    // {name: "helli", isSingle: true, salary: 550000},
  ]  

  receivedData(e:User){
    console.log(e)

    const userIndex = this.users.findIndex(user=>user.name == e.name)
    this.users[userIndex].salary = e.newSalary;
  }

  clear(){
    this.users = [];
  }
}

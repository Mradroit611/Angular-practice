import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent , headerConst as constFromHeader} from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { User } from './components/user/user.model';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent,
    FormsModule, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  header: string = constFromHeader;
  title = 'first-angular-app';
  users = DUMMY_USERS;
  disabled = false;
  selectedUserId?: string;
  // showTasksForUserId?: string;
  showTasksForUserId?: string;
  
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  // onSelectUser(user: User) {
  //   console.log('Userid passed to app compement from select event');
  //   console.log(user);
  //   this.selectedUserId = user.id;
  // }
  toggleTasksForUser(userId: string) {
    this.showTasksForUserId = this.showTasksForUserId === userId ? undefined : userId;
  }
  trackUser(index: number, user: User): string {
    return user.id; // Assuming 'id' is unique for each user
  }
} 



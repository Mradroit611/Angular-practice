import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent , headerConst as constFromHeader} from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { User } from './components/user/user.model';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent,
    FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  header: string = constFromHeader;
  title = 'first-angular-app';
  users = DUMMY_USERS;
  disabled = false;
  selectedUserId?: string;
  
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(user: User) {
    console.log('Userid passed to app compement from select event');
    console.log(user);
    this.selectedUserId = user.id;
  }
} 

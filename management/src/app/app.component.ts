import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, headerConst as constFromHeader } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { User } from './components/user/user.model';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, FormsModule, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: string = constFromHeader;
  title = 'first-angular-app';
  users = DUMMY_USERS;
  disabled = false;
  selectedUserId?: string;
  showTasksForUserId?: string;
  user_name?: string;


  private userTasksMap: { [key: string]: { id: number; name: string; description: string }[] } = {};

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  } 

  toggleTasksForUser(userId: string) {
    this.showTasksForUserId = this.showTasksForUserId === userId ? undefined : userId;
    this.selectedUserId = userId;
 
    const userIndex = this.users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      this.user_name = this.users[userIndex].name;
    } else {
      this.user_name = undefined;
      console.log('User not found');
    }
  }

  addTaskToUser(userId: string, task: { name: string; description: string }) {
    if (!this.userTasksMap[userId]) {
      this.userTasksMap[userId] = [];
    }
    this.userTasksMap[userId].push({
      id: this.userTasksMap[userId].length,
      name: task.name,
      description: task.description
    });
  }

  removeTaskFromUser(userId: string, taskId: number) {
    if (this.userTasksMap[userId]) {
      this.userTasksMap[userId] = this.userTasksMap[userId].filter(task => task.id !== taskId);
    }
  }

  updateTaskForUser(userId: string, updatedTask: { id: number; name: string; description: string }) {
    if (this.userTasksMap[userId]) {
      const taskIndex = this.userTasksMap[userId].findIndex(task => task.id === updatedTask.id);
      if (taskIndex !== -1) {
        this.userTasksMap[userId][taskIndex] = updatedTask;
      }
    }
  }

  getTasksForUser(userId: string) {
    return this.userTasksMap[userId] || [];
  }

  trackUser(index: number, user: User): string {
    return user.id; 
  }
}

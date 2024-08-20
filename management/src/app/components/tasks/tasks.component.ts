import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @Input() selectedUserId: string = "";
  @Input() selectedUser: string = "";
  @Input() tasks: { id: number; name: string; description: string }[] = []; 
  @Output() addTask = new EventEmitter<{ name: string; description: string }>();
  @Output() removeTask = new EventEmitter<number>();
  @Output() updateTask = new EventEmitter<{ id: number; name: string; description: string }>();

  taskName: string = '';
  taskDescription: string = '';
  editTaskId?: number;

  onAddOrUpdateTask() {
    if (this.editTaskId !== undefined) {
      // Updating existing task
      if (this.taskName.trim() && this.taskDescription.trim()) {
        this.updateTask.emit({ id: this.editTaskId, name: this.taskName.trim(), description: this.taskDescription.trim() });
        this.resetForm();
      }
    } else {
      // Adding new task
      if (this.taskName.trim() && this.taskDescription.trim()) {
        this.addTask.emit({ name: this.taskName.trim(), description: this.taskDescription.trim() });
        this.resetForm();
      }
    }
  }

  onEditTask(task: { id: number; name: string; description: string }) {
    this.editTaskId = task.id;
    this.taskName = task.name;
    this.taskDescription = task.description;
  }

  onRemoveTask(taskId: number) {
    this.removeTask.emit(taskId);
    this.resetForm();
  }

  private resetForm() {
    this.taskName = '';
    this.taskDescription = '';
    this.editTaskId = undefined;
  }
}

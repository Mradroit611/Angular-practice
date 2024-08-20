import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  ngOnInit() {
    this.enteredTitle = this.task.title;
    this.enteredSummary = this.task.summary;
    this.enteredDate = this.task.dueDate;
  }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.updateTask({
      ...this.task,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
    this.close.emit();
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from 'src/app/models/task.model';
import {TasksService} from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  checked: boolean = false;
  description: string = '';

  @Input() task: Task | null = null;
  @Input() taskId: number | null = null;
  @Output() changedTask = new EventEmitter<{ task: Task; id: number }>();

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.checked = this.task?.checked || false;
    this.description = this.task?.description || '';
  }

  submitTask(event: SubmitEvent): void {
    event.preventDefault();

    if (this.description === '') return;

    const task: Task = { description: this.description, checked: this.checked };
    this.tasksService.addTask(task);

    this.resetForm();
  }

  resetForm(): void {
    this.checked = false;
    this.description = '';
  }

  deleteTask(id: number) {
    this.tasksService.removeTask(id);
  }

  onChangeChecked(value: boolean) {
    this.checked = value;
    this.onChangeTask();
  }

  onChangeDescription(value: string) {
    this.description = value;
  }

  onChangeTask() {
    const task: Task = { description: this.description, checked: this.checked };
    if (typeof this.taskId === 'number')
      this.changedTask.emit({ task, id: this.taskId });
  }
}

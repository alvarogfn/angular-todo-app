import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.tasks.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onChangedTask({ task, id }: { task: Task; id: number }) {
    this.tasksService.putTask(task, id);
  }
}

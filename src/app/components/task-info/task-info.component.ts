import { Component, Input, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss'],
})
export class TaskInfoComponent implements OnInit {
  constructor(public tasksService: TasksService) {}

  size: number = 0;

  ngOnInit(): void {
    this.tasksService.tasksSize.subscribe((value) => {
      this.size = value;
    });
  }
}

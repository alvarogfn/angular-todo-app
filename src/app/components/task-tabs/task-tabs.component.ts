import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ActiveTab } from 'src/app/utils/active-tab';

@Component({
  selector: 'app-task-tabs',
  templateUrl: './task-tabs.component.html',
  styleUrls: ['./task-tabs.component.scss'],
})
export class TaskTabsComponent implements OnInit {
  constructor(private tasksService: TasksService) {}

  active: ActiveTab = 'All';

  @Output() filter = new EventEmitter<ActiveTab>();

  ngOnInit(): void {}

  changeTab(moveTo: ActiveTab) {
    this.active = moveTo;
    this.tasksService.setActiveTab(this.active);
  }
}

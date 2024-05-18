import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Task} from '../models/task.model';
import {ActiveTab} from '../utils/active-tab';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: BehaviorSubject<Task[]>;
  activeTabTask: ActiveTab = 'All';
  private _tasks: Task[];

  constructor() {
    const loadedTasks = localStorage.getItem('tasks');
    if (loadedTasks) this._tasks = JSON.parse(loadedTasks);
    else this._tasks = [];

    this.tasks = new BehaviorSubject<Task[]>(this._tasks);
    this._tasksSize = new BehaviorSubject<number>(this._tasks.length);
  }

  _tasksSize: BehaviorSubject<number>;

  get tasksSize(): BehaviorSubject<number> {
    this.tasks.subscribe((tasks) => this._tasksSize.next(tasks.length));

    return this._tasksSize;
  }

  addTask(task: Task): void {
    this._tasks.push(task);
    this.updateTask();
  }

  removeTask(id: number): void {
    this._tasks.splice(id, 1);
    this.updateTask();
  }

  putTask(task: Task, id: number): void {
    this._tasks.splice(id, 1, task);
    this.updateTask();
  }

  clear(): void {
    this._tasks.length = 0;
    this.updateTask();
  }

  clearChecked(): void {
    this._tasks = this._tasks.filter((task) => !task.checked);
    this.updateTask();
  }

  setActiveTab(activeTab: ActiveTab) {
    this.activeTabTask = activeTab;
    this.updateTask();
  }

  private updateTask(): void {
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
    this.tasks.next(
      this._tasks.filter((task: Task) => {
        if (this.activeTabTask === 'All') return true;
        if (this.activeTabTask === 'Completed' && task.checked) return true;
        if (this.activeTabTask === 'Active' && !task.checked) return true;
        else return false;
      })
    );
  }
}

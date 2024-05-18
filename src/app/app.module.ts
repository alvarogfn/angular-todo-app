import {NgOptimizedImage} from "@angular/common";
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {TaskInfoComponent} from './components/task-info/task-info.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskTabsComponent} from './components/task-tabs/task-tabs.component';
import {TaskComponent} from './components/task/task.component';
import {TodoComponent} from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TaskComponent,
    TaskListComponent,
    TaskTabsComponent,
    TaskInfoComponent,
  ],
  imports: [BrowserModule, FormsModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

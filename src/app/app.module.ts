import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodoComponent } from './components/todo/todo.component'
import { FormComponent } from './components/form/form.component';
import { UpdateMenuComponent } from './components/update-menu/update-menu.component';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component'

@NgModule({
  declarations: [AppComponent, TodoComponent, FormComponent, UpdateMenuComponent, TodoListPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

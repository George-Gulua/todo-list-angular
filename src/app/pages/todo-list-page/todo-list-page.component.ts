import {Component, OnInit} from '@angular/core';
import {Todo} from "../../models/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit{
  public todoList: Todo[] = []
  public selectedTodo?: Todo | null

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  public onSelectTodo(todo: Todo): void {
    this.selectedTodo = todo
  }

  public getTodos(): void {
    this.todoService
      .getTodos()
      .subscribe(todoList => (this.todoList = todoList))
  }

  public addTodo(title: string): void {
    this.todoService.addTodo(title)
    this.getTodos()
  }

  public updateTodo(id: number, newTitle: string): void {
    this.todoService.updateTodo(id, newTitle)
    this.selectedTodo = null
    this.getTodos()
  }

  public deleteTodo(id: number): void {
    this.todoService.deleteTodo(id)
    this.getTodos()
  }
}

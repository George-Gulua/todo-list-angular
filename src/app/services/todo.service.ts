import { Injectable } from '@angular/core'
import { Todo } from '../models/todo'
import { Observable, of } from 'rxjs'
import { CreateUUID } from '../helper'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public getTodos(): Observable<Todo[]> {
    const todoList = JSON.parse(localStorage.getItem('todo-list') || '[]')
    if (!todoList) {
      localStorage.setItem('todo-list', JSON.stringify([]))
    }
    return of(todoList)
  }

  public addTodo(title: string): void {
    const newArray = [
      ...JSON.parse(localStorage.getItem('todo-list') || '[]'),
      { id: CreateUUID(), title: title, isCompleted: false }
    ]
    localStorage.setItem('todo-list', JSON.stringify(newArray))
  }

  public updateTodo(update_id: string, newTitle: string) {
    const newArray = JSON.parse(localStorage.getItem('todo-list') || '[]')
    newArray.map((todo: Todo) => {
      if (todo.id === update_id) {
        todo.title = newTitle
      }
    })
    localStorage.setItem('todo-list', JSON.stringify(newArray))
  }

  public deleteTodo(delete_id: string): void {
    const newArray = JSON.parse(
      localStorage.getItem('todo-list') || '[]'
    ).filter(({ id }: { id: string }) => id !== delete_id)
    localStorage.setItem('todo-list', JSON.stringify(newArray))
  }

  public onComplete(id: string, isCompleted: boolean) {
    const newArray = JSON.parse(localStorage.getItem('todo-list') || '[]')
    newArray.map((todo: Todo) => {
      if (todo.id === id) {
        todo.isCompleted = isCompleted
      }
    })
    localStorage.setItem('todo-list', JSON.stringify(newArray))
  }
}

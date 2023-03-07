import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Todo } from '../../models/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo
  @Output() outDeleteId = new EventEmitter<string>()
  @Output() outIsComplete = new EventEmitter<boolean>()

  public getDeleteId(id: string): void {
    this.outDeleteId.emit(id)
  }

  public getIsComplete(isCompleted: boolean) {
    this.todo.isCompleted = isCompleted
    this.outIsComplete.emit(isCompleted)
  }
}

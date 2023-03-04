import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Todo } from '../../models/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo
  @Output() outDeleteId = new EventEmitter<number>()

  public getDeleteId(id: number): void {
    this.outDeleteId.emit(id)
  }
}

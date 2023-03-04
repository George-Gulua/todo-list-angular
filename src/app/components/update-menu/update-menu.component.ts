import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.scss']
})
export class UpdateMenuComponent {
  @Output() outOnSelectedTodo = new EventEmitter<string>()

  public getNewTitle(newTitleInput: HTMLInputElement) {
    this.outOnSelectedTodo.emit(newTitleInput.value)
  }
}

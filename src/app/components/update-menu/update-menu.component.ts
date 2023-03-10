import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.scss']
})
export class UpdateMenuComponent {
  @Output() outUpdatedTitle = new EventEmitter<string>()

  public getNewTitle(newTitleInput: HTMLInputElement) {
    this.outUpdatedTitle.emit(newTitleInput.value)
  }
}

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() outEnterTitle = new EventEmitter<string>()

  enterTitle(titleInput: HTMLInputElement) {
    this.outEnterTitle.emit(titleInput.value)
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faPersonWalking} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-selectable-icon',
  templateUrl: './selectable-icon.component.html',
  styleUrls: ['./selectable-icon.component.css']
})
export class SelectableIconComponent {
  @Input() icon: IconProp;
  @Input() inlineText: string;
  @Output() iconSelected: EventEmitter<string> = new EventEmitter<string>();

  isSelected: boolean = false;

  toggleSelection() {
    this.isSelected = !this.isSelected;
    this.iconSelected.emit(this.inlineText);
  }

}

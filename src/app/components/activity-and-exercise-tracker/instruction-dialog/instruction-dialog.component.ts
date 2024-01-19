import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-instruction-dialog',
  templateUrl: './instruction-dialog.component.html',
  styleUrls: ['./instruction-dialog.component.scss']
})
export class InstructionDialogComponent {
  @Input() visibleInstructionDialog: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
}

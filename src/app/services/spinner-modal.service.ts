import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { SpinnerModalComponent } from '../components/spinner-modal/spinner-modal.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerModalService {
  private dialogRef: MatDialogRef<SpinnerModalComponent>;

  constructor(private dialog: MatDialog) { }

  openSpinner(): void {
    this.dialogRef = this.dialog.open(SpinnerModalComponent, {
      width: '250px',
      height: '200px',
      disableClose: true,
    });
  }

  closeSpinner(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}

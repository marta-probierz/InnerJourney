import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { SpinnerModalService } from './spinner-modal.service';
import { SpinnerModalComponent } from '../components/spinner-modal/spinner-modal.component';

describe('SpinnerModalService', () => {
  let service: SpinnerModalService;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpinnerModalService,
        { provide: MatDialog, useValue: { open: () => {}, closeAll: () => {} } },
      ],
    });
    service = TestBed.inject(SpinnerModalService);
    dialog = TestBed.inject(MatDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open spinner dialog', () => {
    const openSpy = spyOn(dialog, 'open').and.callThrough();
    service.openSpinner();
    expect(openSpy).toHaveBeenCalled();
  });

  it('should close spinner dialog if open', () => {
    const dialogRefSpy = jasmine.createSpyObj<MatDialogRef<SpinnerModalComponent>>('MatDialogRef', ['close']);
    spyOn(dialog, 'open').and.returnValue(dialogRefSpy);
    service.openSpinner();
    service.closeSpinner();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should not close spinner dialog if not open', () => {
    const dialogRefSpy = jasmine.createSpyObj<MatDialogRef<SpinnerModalComponent>>('MatDialogRef', ['close']);
    spyOn(dialog, 'open').and.returnValue(null);
    service.openSpinner();
    service.closeSpinner();
    expect(dialogRefSpy.close).not.toHaveBeenCalled();
  });

  it('should open spinner dialog with correct width and height', () => {
    const width = '250px';
    const height = '200px';
    const openSpy = spyOn(dialog, 'open').and.callThrough();
    service.openSpinner();
    expect(openSpy).toHaveBeenCalledWith(SpinnerModalComponent, {
      width: width,
      height: height,
      disableClose: true,
    });
  });

  it('should handle closing spinner dialog when no dialogRef is available', () => {
    spyOn(dialog, 'open').and.returnValue(null);
    service.openSpinner();
    service.closeSpinner();
    expect(() => service.closeSpinner()).not.toThrow();
  });
});

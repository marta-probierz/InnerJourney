import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { JournalForm, JournalGroup } from 'src/app/interface/journaling-feature';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { SpinnerModalService } from 'src/app/services/spinner-modal.service';
import { MentalHealthTrackingService } from 'src/app/services/mental-health-tracking.service';

@Component({
  selector: 'app-journaling-feature',
  templateUrl: './journaling-feature.component.html',
  styleUrls: ['./journaling-feature.component.scss']
})
export class JournalingFeatureComponent implements OnInit {
  journalForm: FormGroup<JournalGroup>;
  currentDate = new Date();
  selected: Date | null;
  showCalendar: boolean = true;

  constructor(
    private messageNotificationService: MessageNotificationService,
    private spinnerModalService: SpinnerModalService,
    private mentalHealthTrackingService: MentalHealthTrackingService,
  ) { }

  ngOnInit(): void {
    this.initJournalForm();
  }

  initJournalForm() {
    this.journalForm = new FormGroup<JournalGroup>({
      date: new FormControl(this.currentDate),
      note: new FormControl(null, [Validators.required]),
    });
  }

  isClearButtonDisabled(): boolean {
    return this.journalForm.get('note').value === null || this.journalForm.get('note').value.trim() === '';
  }
  
  onClearTextarea() {
    this.journalForm.get('note').setValue(null);
  }

  onDateSelected(event: Date) {
    this.selected = event;
    this.showCalendar = false;
  }

  onSubmitJournalForm() {
    if (this.journalForm.invalid) {
      return;
    }

    const todayJournal: JournalForm = this.journalForm.value as JournalForm;

    this.spinnerModalService.openSpinner();

    this.mentalHealthTrackingService.addJournalForm(todayJournal).subscribe({
      next: () => {
        this.journalForm.reset();
        this.spinnerModalService.closeSpinner();
        this.messageNotificationService.showSuccessMessage('Journal entry saved successfully! 📓✨');
      },
      error: () => {
        this.spinnerModalService.closeSpinner();
        this.messageNotificationService.showErrorMessage('Something went wrong. Please try again');
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { JournalForm, JournalGroup } from 'src/app/interface/journaling-feature';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { SpinnerModalService } from 'src/app/services/spinner-modal.service';

@Component({
  selector: 'app-journaling-feature',
  templateUrl: './journaling-feature.component.html',
  styleUrls: ['./journaling-feature.component.scss']
})
export class JournalingFeatureComponent implements OnInit {
  journalForm: FormGroup<JournalGroup>;
  currentDate = new Date();
  selected: Date | null;

  constructor(
    private messageNotificationService: MessageNotificationService,
    private spinnerModalService: SpinnerModalService
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

  onSubmitJournalForm() {
    if (this.journalForm.invalid) {
      return;
    }

    const todayJournal: JournalForm = this.journalForm.value as JournalForm;
    console.log(todayJournal);
  }
}

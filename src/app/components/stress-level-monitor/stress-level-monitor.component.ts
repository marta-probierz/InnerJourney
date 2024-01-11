import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/api';

import { StressLevelMonitorForm, StressLevelMonitorGroup } from 'src/app/interface/stress-level-monitor';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { SpinnerModalService } from 'src/app/services/spinner-modal.service';

@Component({
  selector: 'app-stress-level-monitor',
  templateUrl: './stress-level-monitor.component.html',
  styleUrls: ['./stress-level-monitor.component.scss']
})
export class StressLevelMonitorComponent implements OnInit {
  currentDate = new Date();
  stressLevel: number = 0;
  stressLevelMonitorForm: FormGroup<StressLevelMonitorGroup>;
  formDisabled: boolean = false;
  messages: Message[] | undefined;

  constructor(
    private messageNotificationService: MessageNotificationService,
    private spinnerModalService: SpinnerModalService
  ) { }

  ngOnInit(): void {
    this.initStressLevelMonitorForm();
    this.loadFormState();
    this.messages = [{ 
      severity: 'success', 
      detail: `Thank you for indicating your stress level today. Your commitment to self-awareness is commendable. We look forward to your continued engagement. See you tomorrow!` 
    }];
  }

  initStressLevelMonitorForm() {
    this.stressLevelMonitorForm = new FormGroup<StressLevelMonitorGroup>({
      date: new FormControl(this.currentDate),
      stressLevel: new FormControl(0, [Validators.min(0), Validators.max(100)]),
    });
  }

  isFormDisabled() {
    return this.formDisabled;
  }

  loadFormState() {
    const savedDate = localStorage.getItem('stressLevelMonitorDate');
    const currentDateStr = this.currentDate.toISOString().split('T')[0];

    if (savedDate === currentDateStr) {
      const savedForm = JSON.parse(localStorage.getItem('stressLevelMonitorForm'));
      this.stressLevelMonitorForm.patchValue(savedForm);
      this.formDisabled = true;
      this.disableFormControls(this.stressLevelMonitorForm);
    }
  }

  incrementStressLevel() {
    if (this.stressLevel < 100) {
      this.stressLevel += 10;
      this.stressLevelMonitorForm.get('stressLevel').setValue(this.stressLevel);
    }
  }

  decrementStressLevel() {
    if (this.stressLevel > 0) {
      this.stressLevel -= 10;
      this.stressLevelMonitorForm.get('stressLevel').setValue(this.stressLevel);
    }
  }

  onSubmitStressLevelMonitorForm() {
    if (this.stressLevelMonitorForm.invalid) {
      return;
    }

    const stressLevel: StressLevelMonitorForm = this.stressLevelMonitorForm.value as StressLevelMonitorForm;

    localStorage.setItem('stressLevelMonitorDate', this.currentDate.toISOString().split('T')[0]);
    localStorage.setItem('stressLevelMonitorForm', JSON.stringify(stressLevel));
    this.formDisabled = true;
    this.disableFormControls(this.stressLevelMonitorForm);
  }

  disableFormControls(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(controlName => {
      const control = formGroup.get(controlName);

      if (control) {
        control.disable();
      }
    });
  }
}

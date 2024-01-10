import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/api';

import { TrackerProps, DailyMoodTrackerForm, DailyMoodTrackerGroup } from 'src/app/interface/daily-mood-tracker';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { SpinnerModalService } from 'src/app/services/spinner-modal.service';

@Component({
  selector: 'app-daily-mood-tracker',
  templateUrl: './daily-mood-tracker.component.html',
  styleUrls: ['./daily-mood-tracker.component.scss']
})
export class DailyMoodTrackerComponent implements OnInit, AfterViewInit {
  @ViewChild('saveEditButton', { static: false }) saveEditButton: ElementRef<HTMLButtonElement> | undefined;
  messages: Message[] | undefined;
  currentDate = new Date();
  feelings: TrackerProps[] = [
      { label: 'Happy', value: 'happy' },
      { label: 'Powerful', value: 'powerful' },
      { label: 'Motivated', value: 'motivated' },
      { label: 'Proud', value: 'proud' },
      { label: 'Relaxed', value: 'relaxed' },
      { label: 'Satisfield', value: 'satisfield' },
      { label: 'Grateful', value: 'grateful' },
      { label: 'Calm', value: 'calm' },
      { label: 'Loved', value: 'loved' },
      { label: 'Fine', value: 'fine' },
      { label: 'Sad', value: 'sad' },
      { label: 'Lazy', value: 'lazy' },
      { label: 'Frustrated', value: 'frustrated' },
      { label: 'Bored', value: 'bored' },
      { label: 'Anxious', value: 'anxious' },
      { label: 'Annoyed', value: 'annoyed' },
      { label: 'Tired', value: 'tired' },
      { label: 'Depressed', value: 'depressed' },
      { label: 'Lonely', value: 'lonely' },
      { label: 'Sick', value: 'sick' },
  ];

  careOfMyself: TrackerProps[] = [
    { label: 'Read', value: 'read' },
    { label: 'Yoga', value: 'yoga' },
    { label: 'Walk', value: 'walk' },
    { label: 'Running', value: 'running' },
    { label: 'Pets', value: 'pets' },
    { label: 'Music', value: 'music' },
    { label: 'Movie', value: 'movie' },
    { label: 'Play Game', value: 'playGame' },
    { label: 'Extra Sleep', value: 'extraSleep' },
    { label: 'Food', value: 'food' },
  ]

  dailyMoodTrackerForm = new FormGroup<DailyMoodTrackerGroup>({
    date: new FormControl(this.currentDate),
    todayIFeel: new FormControl([], Validators.required),
    loveLevel: new FormControl(null, Validators.required),
    energyLevel: new FormControl(null, Validators.required),
    waterIntake: new FormControl(null, Validators.required),
    morningMood: new FormControl(null, Validators.required),
    afternoomMood: new FormControl(null, Validators.required),
    eveningMood: new FormControl(null, Validators.required),
    careOfMyself: new FormControl([], Validators.required),
    dayRating: new FormControl(null, Validators.required),
  });

  constructor(
    private messageNotificationService: MessageNotificationService,
    private spinnerModalService: SpinnerModalService
  ) { }

  ngOnInit(): void {
    this.loadFormState();
    this.messages = [{ severity: 'success', detail: `Great job on filling out today's form! We appreciate your consistency. Looking forward to having you back tomorrow with the same enthusiasm!` }];
  }

  ngAfterViewInit(): void {
    this.loadFormState();
  }

  loadFormState() {
    const savedDate = localStorage.getItem('dailyMoodTrackerDate');
    const currentDateStr = this.currentDate.toISOString().split('T')[0];

    if (savedDate === currentDateStr) {
      const savedForm = JSON.parse(localStorage.getItem('dailyMoodTrackerForm'));

      this.dailyMoodTrackerForm.patchValue(savedForm);

      if (savedForm) {
        this.disableSaveButton();
        this.disableFormControls(this.dailyMoodTrackerForm);
      }
    }
  }

  onSubmitDailyMoodTrackerForm() {
    if (this.dailyMoodTrackerForm.invalid) {
      return;
    }

    const dailyMood: DailyMoodTrackerForm = this.dailyMoodTrackerForm.value as DailyMoodTrackerForm;

    localStorage.setItem('dailyMoodTrackerForm', JSON.stringify(dailyMood));
    localStorage.setItem('dailyMoodTrackerDate', this.currentDate.toISOString().split('T')[0]);

    this.disableSaveButton();
    this.disableFormControls(this.dailyMoodTrackerForm);
  }

  disableSaveButton() {
    if (this.saveEditButton) {
      const button: HTMLButtonElement = this.saveEditButton.nativeElement;

      if (button) {
        button.disabled = true;
      }
    }
  }

  disableFormControls(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(controlName => {
      const control = formGroup.get(controlName);

      if (control instanceof FormGroup) {
        this.disableFormControls(control);
      } else {
        control.disable();
      }
    });
  }
}

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'primeng/api';

import { TrackerProps, DailyMoodTrackerForm, DailyMoodTrackerGroup } from 'src/app/interface/daily-mood-tracker';
import { Feelings } from 'src/app/enums/Feelings';
import { CareOfMyself } from 'src/app/enums/CareOfMyself';
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
      { label: 'Happy', value: Feelings.HAPPY },
      { label: 'Powerful', value: Feelings.POWERFUL },
      { label: 'Motivated', value: Feelings.MOTIVATED },
      { label: 'Proud', value: Feelings.PROUD },
      { label: 'Relaxed', value: Feelings.RELAXED },
      { label: 'Satisfield', value: Feelings.SATISFIELD },
      { label: 'Grateful', value: Feelings.GRATEFUL },
      { label: 'Calm', value: Feelings.CALM },
      { label: 'Loved', value: Feelings.LOVED },
      { label: 'Fine', value: Feelings.FINE },
      { label: 'Sad', value: Feelings.SAD },
      { label: 'Lazy', value: Feelings.LAZY },
      { label: 'Frustrated', value: Feelings.FRUSTRATED },
      { label: 'Bored', value: Feelings.BORED },
      { label: 'Anxious', value: Feelings.ANXIOUS },
      { label: 'Annoyed', value: Feelings.ANNOYED },
      { label: 'Tired', value: Feelings.TIRED },
      { label: 'Depressed', value: Feelings.DEPRESSED },
      { label: 'Lonely', value: Feelings.LONELY },
      { label: 'Sick', value: Feelings.SICK },
  ];

  careOfMyself: TrackerProps[] = [
    { label: 'Read', value: CareOfMyself.READ },
    { label: 'Yoga', value: CareOfMyself.YOGA },
    { label: 'Walk', value: CareOfMyself.WALK },
    { label: 'Running', value: CareOfMyself.RUNNING },
    { label: 'Pets', value: CareOfMyself.PETS },
    { label: 'Music', value: CareOfMyself.MUSIC },
    { label: 'Movie', value: CareOfMyself.MOVIE },
    { label: 'Play Game', value: CareOfMyself.PLAY_GAME },
    { label: 'Extra Sleep', value: CareOfMyself.EXTRA_SLEEP },
    { label: 'Food', value: CareOfMyself.FOOD },
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

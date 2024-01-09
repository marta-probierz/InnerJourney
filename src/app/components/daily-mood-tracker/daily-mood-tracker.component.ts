import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FeelingsProps, DailyMoodTrackerForm, DailyMoodTrackerGroup } from 'src/app/interface/daily-mood-tracker';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { SpinnerModalService } from 'src/app/services/spinner-modal.service';

@Component({
  selector: 'app-daily-mood-tracker',
  templateUrl: './daily-mood-tracker.component.html',
  styleUrls: ['./daily-mood-tracker.component.scss']
})
export class DailyMoodTrackerComponent {
  currentDate = new Date();
  feelings: FeelingsProps[] = [
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

  dailyMoodTrackerForm = new FormGroup<DailyMoodTrackerGroup>({
    date: new FormControl(this.currentDate),
    todayIFeel: new FormControl([], Validators.required),
    loveLevel: new FormControl(null, Validators.required),
    energyLevel: new FormControl(null, Validators.required),
    dayRating: new FormControl(null, Validators.required),
    morningMood: new FormControl(null, Validators.required),
    afternoomMood: new FormControl(null, Validators.required),
    eveningMood: new FormControl(null, Validators.required),
  });

  constructor(
    private messageNotificationService: MessageNotificationService,
    private spinnerModalService: SpinnerModalService
  ) { }

  onSubmitDailyMoodTrackerForm() {
    if (this.dailyMoodTrackerForm.invalid)
    return;

    const dailyMood: DailyMoodTrackerForm = this.dailyMoodTrackerForm.value as DailyMoodTrackerForm;
    console.log(dailyMood);
  }
}

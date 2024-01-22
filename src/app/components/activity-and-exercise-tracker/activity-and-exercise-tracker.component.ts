import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { ActivityAndExerciseValue, ActivityAndExerciseDescription } from 'src/app/enums/ActivityAndExercise';
import { ActivityAndExerciseTrackerProps, ActivityAndExerciseForm, ActivityAndExerciseGroup, ActivityAndExerciseFullForm } from 'src/app/interface/activity-and-exercise-tracker';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { SpinnerModalService } from 'src/app/services/spinner-modal.service';

@Component({
  selector: 'app-activity-and-exercise-tracker',
  templateUrl: './activity-and-exercise-tracker.component.html',
  styleUrls: ['./activity-and-exercise-tracker.component.scss']
})
export class ActivityAndExerciseTrackerComponent implements OnInit {
  visibleInstructionDialog: boolean = false;
  activityAndExerciseForm: FormGroup<ActivityAndExerciseGroup>;
  currentDate = new Date();

  activityAndExercise: ActivityAndExerciseTrackerProps[] = [
    { label: 'Home Workout', value: ActivityAndExerciseValue.HOME_WORKOUT, description: ActivityAndExerciseDescription.HOME_WORKOUT },
    { label: 'Outdoor Excursion', value: ActivityAndExerciseValue.OUTDOOR_EXCURSION, description: ActivityAndExerciseDescription.OUTDOOR_EXCURSION },
    { label: 'Movement During Work Breaks', value: ActivityAndExerciseValue.MOVEMENT_DURING_WORK_BREAKS, description: ActivityAndExerciseDescription.MOVEMENT_DURING_WORK_BREAKS },
    { label: 'Spontaneous Activities', value: ActivityAndExerciseValue.SPONTANEOUS_ACTIVITIES, description: ActivityAndExerciseDescription.SPONTANEOUS_ACTIVITIES },
    { label: 'Activity with a Friend', value: ActivityAndExerciseValue.ACTIVITY_WITH_A_FRIEND, description: ActivityAndExerciseDescription.ACTIVITY_WITH_A_FRIEND },
    { label: 'Movement During Household Chores', value: ActivityAndExerciseValue.MOVEMENT_DURING_HOUSEHOLD_CHORES, description: ActivityAndExerciseDescription.MOVEMENT_DURING_HOUSEHOLD_CHORES },
    { label: 'Gardening Activities', value: ActivityAndExerciseValue.GARDENING_ACTIVITIES, description: ActivityAndExerciseDescription.GARDENING_ACTIVITIES },
    { label: 'Movement During Daily Duties', value: ActivityAndExerciseValue.MOVEMENT_DURING_DAILY_DUTIES, description: ActivityAndExerciseDescription.MOVEMENT_DURING_DAILY_DUTIES },
    { label: 'Playtime with Children', value: ActivityAndExerciseValue.PLAYTIME_WITH_CHILDREN, description: ActivityAndExerciseDescription.PLAYTIME_WITH_CHILDREN },
    { label: 'Activity During Travel', value: ActivityAndExerciseValue.ACTIVITY_DURING_TRAVEL, description: ActivityAndExerciseDescription.ACTIVITY_DURING_TRAVEL },
  ];

  constructor(
    private messageNotificationService: MessageNotificationService,
    private spinnerModalService: SpinnerModalService
  ) { }

  ngOnInit(): void {
    this.initActivityAndExerciseForm();
  }

  initActivityAndExerciseForm() {
    const todayActivityAndExerciseFormArray = this.activityAndExercise.map(() => new FormControl(false));
    
    this.activityAndExerciseForm = new FormGroup<ActivityAndExerciseGroup>({
      date: new FormControl(this.currentDate),
      todayActivityAndExercise: new FormArray(todayActivityAndExerciseFormArray),
    });
  }

  getCheckboxControl(index: number): FormControl {
    const formArray = this.activityAndExerciseForm.get('todayActivityAndExercise') as FormArray;
    return formArray.at(index) as FormControl;
  }

  showInstructionDialog() {
    this.visibleInstructionDialog = true;
  }

  hideInstructionDialog() {
    this.visibleInstructionDialog = false;
  }

  onSubmitActivityAndExerciseForm() {
    if (this.activityAndExerciseForm.invalid) {
      return;
    }

    const todayActivityAndExercise: ActivityAndExerciseForm = this.activityAndExerciseForm.value as ActivityAndExerciseForm;
    const selectedTodayActivityAndExercise: string[] = [];

    const formArray = this.activityAndExerciseForm.get('todayActivityAndExercise') as FormArray;
    formArray.controls.forEach((control, index) => {
      if (control.value !== false) {
        const option = this.activityAndExercise[index];
        selectedTodayActivityAndExercise.push(option.value);
      }
    });
  
    const todayActivityAndExerciseFullForm: ActivityAndExerciseFullForm = {
      date: todayActivityAndExercise.date,
      todayActivityAndExercise: selectedTodayActivityAndExercise,
    };

    console.log(todayActivityAndExerciseFullForm);
  }
}

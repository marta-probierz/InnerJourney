import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-and-exercise-tracker',
  templateUrl: './activity-and-exercise-tracker.component.html',
  styleUrls: ['./activity-and-exercise-tracker.component.scss']
})
export class ActivityAndExerciseTrackerComponent {
  visibleInstructionDialog: boolean = false;

  showInstructionDialog() {
    this.visibleInstructionDialog = true;
  }

  hideInstructionDialog() {
    this.visibleInstructionDialog = false;
  }
}

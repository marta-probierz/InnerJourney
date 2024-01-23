import { FormControl, FormArray } from "@angular/forms";

export interface ActivityAndExerciseForm {
  date: Date;
  todayActivityAndExercise: boolean[];
}

export interface ActivityAndExerciseGroup {
  date: FormControl<Date>;
  todayActivityAndExercise: FormArray;
}

export interface ActivityAndExerciseFullForm {
  date: Date;
  todayActivityAndExercise: string[];
}

export interface ActivityAndExerciseTrackerProps {
  label: string;
  value: string;
  description: string;
}

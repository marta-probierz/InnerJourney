import { FormControl } from "@angular/forms";

export interface StressLevelMonitorForm {
  date: Date;
  stressLevel: number;
}

export interface StressLevelMonitorGroup {
  date: FormControl<Date>;
  stressLevel: FormControl<number>;
}

import { FormControl } from "@angular/forms";

export interface DailyMoodTrackerForm {
  date: Date;
  todayIFeel: string[];
  loveLevel: number;
  energyLevel: number;
  dayRating: number;
  morningMood: number;
  afternoomMood: number;
  eveningMood: number;
  careOfMyself: string[];
  waterIntake: number;
}

export interface DailyMoodTrackerGroup {
  date: FormControl<Date>;
  todayIFeel: FormControl<string[]>;
  loveLevel: FormControl<number>;
  energyLevel: FormControl<number>;
  dayRating: FormControl<number>;
  morningMood: FormControl<number>;
  afternoomMood: FormControl<number>;
  eveningMood: FormControl<number>;
  careOfMyself: FormControl<string[]>;
  waterIntake: FormControl<number>;
}

export interface TrackerProps {
  label: string;
  value: string;
}

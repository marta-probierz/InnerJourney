import { FormControl } from "@angular/forms";

export interface JournalForm {
  date: Date;
  note: string;
}

export interface JournalGroup {
  date: FormControl<Date>;
  note: FormControl<string>;
}

import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';

import { JournalForm } from '../interface/journaling-feature';

@Injectable({
  providedIn: 'root'
})
export class MentalHealthTrackingService {
  private journalFormCollection = 'journalFormData';

  constructor(private firestore: AngularFirestore) { }

  addJournalForm(journalForm: JournalForm): Observable<DocumentReference> {
    const promise = this.firestore.collection(this.journalFormCollection).add(journalForm);
    return from(promise);
  }
}

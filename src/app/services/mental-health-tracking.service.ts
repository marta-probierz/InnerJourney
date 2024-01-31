import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { AngularFirestore, DocumentReference, QuerySnapshot } from '@angular/fire/compat/firestore';

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

  getAllJournalForms(): Observable<JournalForm[]> {
    return this.firestore.collection(this.journalFormCollection).get().pipe(map((querySnapshot: QuerySnapshot<JournalForm>) => {
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as JournalForm));
      })
    );
  }
}

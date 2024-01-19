import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MatTabsModule } from '@angular/material/tabs';
import { RatingModule } from 'primeng/rating';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MatCardModule } from '@angular/material/card';
import { MessagesModule } from 'primeng/messages';
import { KnobModule } from 'primeng/knob';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogModule } from 'primeng/dialog';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SpinnerModalComponent } from './components/spinner-modal/spinner-modal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MentalHealthTrackingComponent } from './pages/mental-health-tracking/mental-health-tracking.component';
import { DailyMoodTrackerComponent } from './components/daily-mood-tracker/daily-mood-tracker.component';
import { StressLevelMonitorComponent } from './components/stress-level-monitor/stress-level-monitor.component';
import { MindfulnessAndMeditationTrackerComponent } from './components/mindfulness-and-meditation-tracker/mindfulness-and-meditation-tracker.component';
import { JournalingFeatureComponent } from './components/journaling-feature/journaling-feature.component';
import { ActivityAndExerciseTrackerComponent } from './components/activity-and-exercise-tracker/activity-and-exercise-tracker.component';
import { InstructionDialogComponent } from './components/activity-and-exercise-tracker/instruction-dialog/instruction-dialog.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    LoginComponent, 
    SpinnerModalComponent, 
    DashboardComponent, 
    HeaderComponent, 
    MentalHealthTrackingComponent, 
    DailyMoodTrackerComponent, 
    StressLevelMonitorComponent, 
    MindfulnessAndMeditationTrackerComponent, 
    JournalingFeatureComponent, 
    ActivityAndExerciseTrackerComponent, InstructionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    MatDialogModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    ToastModule,
    MatTabsModule,
    RatingModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    MatCardModule,
    MessagesModule,
    KnobModule,
    ButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    InputTextareaModule,
    DialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { MessageNotificationService } from 'src/app/services/message-notification.service';

@Component({
  selector: 'app-mindfulness-and-meditation-tracker',
  templateUrl: './mindfulness-and-meditation-tracker.component.html',
  styleUrls: ['./mindfulness-and-meditation-tracker.component.scss']
})
export class MindfulnessAndMeditationTrackerComponent implements OnInit {
  @ViewChild('timer', { static: true }) timer: ElementRef;
  fullDashArray: number = 283;
  resetDashArray: string = `-57 ${this.fullDashArray}`;
  timeLimit: number = 60;
  timePassed: number = -1;
  timeLeft: number = this.timeLimit;
  timerInterval: any = null;
  isStartBtnDisabled: boolean = false;
  isPauseBtnDisabled: boolean = true;
  isFirstStart: boolean = true;
  isGetReadyVisible: boolean = false;

  constructor(private messageNotificationService: MessageNotificationService) { }

  ngOnInit() {
    this.resetVars();
  }

  showGetReadyMessage() {
    this.isGetReadyVisible = true;
    setTimeout(() => {
      this.isGetReadyVisible = false;
      this.startTimer();
    }, 1000);
  }

  onReset() {
    clearInterval(this.timerInterval);
    this.resetVars();
  }

  onStart(withReset: boolean = false) {
    this.isStartBtnDisabled = true;
    this.isPauseBtnDisabled = false;

    if (withReset) {
      this.resetVars();
    }
    if (this.isFirstStart) {
      this.isFirstStart = false;
      this.showGetReadyMessage();
    } else {
      this.startTimer();
    }
  }

  onPause() {
    this.isStartBtnDisabled = false;
    this.isPauseBtnDisabled = true;
    clearInterval(this.timerInterval);
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1;
      this.timeLeft = this.timeLimit - this.timePassed;
      this.setCircleDasharray();

      if (this.timeLeft === 0) {
        this.timeIsUp();
      }
    }, 1000);
  }

  timeIsUp() {
    this.isStartBtnDisabled = true;
    this.isPauseBtnDisabled = false;
    clearInterval(this.timerInterval);
    this.onReset();
    this.messageNotificationService.showSuccessMessage(`Congratulations! You've successfully dedicated a minute to yourself. Great mindfulness practice!`);
  }

  resetVars() {
    this.isStartBtnDisabled = false;
    this.isPauseBtnDisabled = true;
    this.isFirstStart = true;
    this.timePassed = -1;
    this.timeLeft = this.timeLimit;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  calculateTimeFraction(): number {
    const rawTimeFraction = this.timeLeft / this.timeLimit;
    return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
  }

  setCircleDasharray() {
    const circleDasharray = `${(this.calculateTimeFraction() * this.fullDashArray).toFixed(0)} ${this.fullDashArray}`;
    this.timer.nativeElement.setAttribute('stroke-dasharray', circleDasharray);
  }
}

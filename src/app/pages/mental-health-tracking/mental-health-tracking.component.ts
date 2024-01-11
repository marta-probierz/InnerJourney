import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { SpinnerModalService } from 'src/app/services/spinner-modal.service';

@Component({
  selector: 'app-mental-health-tracking',
  templateUrl: './mental-health-tracking.component.html',
  styleUrls: ['./mental-health-tracking.component.scss']
})
export class MentalHealthTrackingComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private titleService: Title,
    private messageNotificationService: MessageNotificationService,
    private spinnerModalService: SpinnerModalService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Mental Health Tracking');
  }

  onLogOut() {
    this.spinnerModalService.openSpinner();
    this.authService.logOut().then(() => {
      setTimeout(() => {
        this.router.navigate(['']);
        this.spinnerModalService.closeSpinner();
      }, 1000);
    })
    .catch(() => {
      this.spinnerModalService.closeSpinner();
      this.messageNotificationService.showErrorMessage('Something went wrong. Please try again');
    })
  }
}

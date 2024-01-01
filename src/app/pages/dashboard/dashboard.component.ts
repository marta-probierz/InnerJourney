import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from '@angular/fire/auth';

import { AuthService } from 'src/app/services/auth.service';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { SpinnerModalService } from 'src/app/services/spinner-modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User | null;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private titleService: Title,
    private messageNotificationService: MessageNotificationService,
    private spinnerModalService: SpinnerModalService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    } else {
      this.currentUser = this.authService.getCurrentUser();
    }
  }

  logOut() {
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

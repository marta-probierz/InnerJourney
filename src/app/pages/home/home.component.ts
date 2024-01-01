import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Typewriter from 't-writer.js';

import { AuthService } from 'src/app/services/auth.service';
import { MessageNotificationService } from 'src/app/services/message-notification.service';
import { SpinnerModalService } from 'src/app/services/spinner-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private titleService: Title,
    private authService: AuthService, 
    private router: Router,
    private messageNotificationService: MessageNotificationService,
    private spinnerModalService: SpinnerModalService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Home');

    this.authService.authStateChanged.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    const target = document.querySelector('.type');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#0b5ed7',
    });

    writer
      .type('better mental health')
      .rest(900)
      .changeOps({ deleteSpeed: 80 })
      .remove(21)
      .type('improved mental well-being')
      .rest(900)
      .remove(26)
      .type('enhanced psychological health')
      .rest(900)
      .remove(29)
      .type('superior emotional wellness')
      .rest(900)
      .remove(27)
      .type('heightened mental fitness')
      .rest(900)
      .remove(25)
      .type('superior mental equilibrium')
      .rest(900)
      .clear()
      .start();
  }

  handleButtonClick() {
    if (this.isLoggedIn) {
      this.spinnerModalService.openSpinner();
      this.authService.logOut().then(() => {
        setTimeout(() => {
          this.spinnerModalService.closeSpinner();
          this.messageNotificationService.showSuccessMessage('You have been successfully logged out');
        }, 1000);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}

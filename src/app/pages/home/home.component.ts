import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Home');

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
}

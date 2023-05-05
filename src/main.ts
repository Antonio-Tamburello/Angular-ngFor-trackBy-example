import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `

  <span>Open your console and check the two ul elements</span>

  <div>
    <button (click)="update()">Update Array</button>
  </div>

  <div style="display: flex">
    <div style="width: 50%">
      <span>Array without trackBy</span>
      <ul>
        <li *ngFor="let test of arrayElements">
          {{ test.id }} - {{ test.value }}
        </li>
      </ul>
    </div>

    <div style="width: 50%">
      <span>Array with trackBy</span>
      <ul>
        <li *ngFor="let test of arrayElements; trackBy: trackByItem">
          {{ test.id }} - {{ test.value }}
        </li>
      </ul>
    </div>
  </div>
  `,
})
export class App {
  arrayElements: { id: number; value: number }[] = [
    { id: 0, value: 0 },
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
  ];

  update() {
    const random = Math.floor(Math.random() * 100);

    this.arrayElements = [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: random, value: random },
    ];
  }

  trackByItem(index: number, element: { id: number; value: number }) {
    return element.id; // or index but an id is better because unique
  }
}

bootstrapApplication(App);

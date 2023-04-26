import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

interface Bicycle {
  id: string;
  name: string;
  price: number;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ul>
  <li *ngFor="let bike of bikes$ | async; index as i">
    {{ i+1 }}) {{ bike.id }} {{ bike.name }}
  </li>
</ul>
  `,

  styles: [
    `
    ul{
      list-style: none;

    }
  `,
  ],
})
export class App {
  bikes$: Observable<Bicycle[]> = of([
    { id: '177', name: 'Salkano', price: 555 },
    { id: '178', name: 'Halkano', price: 756 },
    { id: '179', name: 'Barbaro', price: 468 },
  ]);
}

bootstrapApplication(App);

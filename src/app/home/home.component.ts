import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Application de films</h1>
    <br>
    <app-film-liste></app-film-liste>
    <app-film-liste-cartes></app-film-liste-cartes>
    `,
  styles: [
    'h1 {font-size: 3em; text-align: center; margin-top: 2em}',
  ]
})
export class HomeComponent {
}


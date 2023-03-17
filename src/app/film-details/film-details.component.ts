import { Component, Input } from '@angular/core';
import { Film,FILMS } from '../film';

@Component({
  selector: 'app-film-details',
  template: `
    <div *ngIf="film">
      <app-film-liste-cartes [films]="films"></app-film-liste-cartes>
    </div>
  `,
  styles: [
    'h2 {font-size: 2em}',
    'p {font-size: 1.5em}',
  ],
})
export class FilmDetailsComponent {
  @Input() film?: Film;
  films = FILMS;
}

import { Component, Input } from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'app-film-liste-cartes',
  template: `
    <mat-grid-list cols="3" gutterSize="16px">
      <mat-grid-tile *ngFor="let film of films">
        <app-film-card [film]="film"></app-film-card>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
    'mat-grid-list { margin: 20px; }',
    'mat-grid-tile { height: 550px; }'
  ]
})
export class FilmListeCartesComponent {
  @Input() films: Film[] = [];
}

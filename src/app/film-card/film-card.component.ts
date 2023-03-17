import { Component, Input } from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'app-film-card',
  template: `
    <br>
    <div class="card" appCarteBordure>
    <mat-card class="card">
      <mat-card-content><mat-icon>calendar_today</mat-icon> <p><span matBadge="{{film.year|badgeAnnee}}" matBadgeSize="small" matBadgeOverlap="false" matBadgeColor="accent">{{film.year}}</span></p>
      </mat-card-content>
      <mat-card-header>
        <div mat-card-avatar class="header-image"></div>
        <mat-card-title>{{ film.title }}</mat-card-title>
        <mat-card-subtitle>{{ film.director }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-lg-image [src]="film.affiche" [alt]="film.title">
      <mat-card-content>
        <br>
        <mat-chip-listbox aria-label="film acteur">
          <div *ngFor="let actor of film.actors">
            <mat-chip-option>{{actor}}</mat-chip-option>
          </div>
        </mat-chip-listbox>
        <app-film-rating [rating]="film.rating"></app-film-rating>
        <span class="entrées"> Nombre d'entrées : {{ film.entrees }}</span>
      </mat-card-content>
    </mat-card>
    </div>
  `,
  styles: [
    `.card {
      display: inline-block;
      vertical-align: top;
    }

    img {
      max-width: 100%; margin-left: 80px;
    }

    .entrées {
      display: block;
      margin-top: 10px;
      font-size: 14px;
      color: gray;
    }

    `,
  ],
})
export class FilmCardComponent {
  @Input() film!: Film;
}

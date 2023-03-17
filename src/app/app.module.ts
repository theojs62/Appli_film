import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FilmListeComponent } from './film-liste/film-liste.component';
import {MatTableModule} from "@angular/material/table";
import { FilmDetailsComponent } from './film-details/film-details.component';
import { BadgeAnneePipe } from './badge-annee.pipe';
import {DateFunctionsService} from "./services/date-functions.service";
import {MatBadgeModule} from "@angular/material/badge";
import { FilmRatingComponent } from './film-rating/film-rating.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { FilmCardComponent } from './film-card/film-card.component';
import {MatCardModule} from "@angular/material/card";
import { FilmListeCartesComponent } from './film-liste-cartes/film-liste-cartes.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {CarteBorderDirective} from "./carte-bordure";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmListeComponent,
    FilmDetailsComponent,
    BadgeAnneePipe,
    FilmRatingComponent,
    FilmCardComponent,
    FilmListeCartesComponent,
    CarteBorderDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,

  ],
  providers: [DateFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

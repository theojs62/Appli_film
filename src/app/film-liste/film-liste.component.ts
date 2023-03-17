import { Component } from '@angular/core';
import { Film,FILMS } from '../film';


@Component({
  selector: 'app-film-liste',
  template: `
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
      <!-- titre Column -->
      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef> Title </th>
        <td mat-cell *matCellDef="let element">
          {{element.title}}
        </td>
      </ng-container>
      <!-- year Column -->
      <ng-container matColumnDef="year">
        <th mat-header-cell *matHeaderCellDef> Year </th>
        <td mat-cell *matCellDef="let element">
          {{element.year}}
        </td>
      </ng-container>
      <!-- director Column -->
      <ng-container matColumnDef="director">
        <th mat-header-cell *matHeaderCellDef> Director</th>
        <td mat-cell *matCellDef="let element">
          {{element.director}}
        </td>
      </ng-container>
      <!-- La ligne -->
      <tr mat-header-row *matHeaderRowDef="lesColonnes"></tr>
      <tr mat-row *matRowDef="let row; columns: lesColonnes;" (click)="selectFilm(row)"></tr>
    </table>
    <app-film-details [film]="filmSelectionne"></app-film-details>
  `,
  styles: [
    'table {margin: auto auto; min-width: 600px}',
  ],
})
export class FilmListeComponent {
  dataSource: Film[] = FILMS;
  lesColonnes: string[] = ['title', 'year', 'director'];
  filmSelectionne: Film | undefined;

  selectFilm(row: Film) {
    if (row == this.filmSelectionne) {
      this.filmSelectionne = undefined;
    } else {
      this.filmSelectionne = row;
    }
  }
}

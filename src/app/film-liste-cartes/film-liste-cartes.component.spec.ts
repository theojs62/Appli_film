import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListeCartesComponent } from './film-liste-cartes.component';

describe('FilmListeCartesComponent', () => {
  let component: FilmListeCartesComponent;
  let fixture: ComponentFixture<FilmListeCartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmListeCartesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmListeCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

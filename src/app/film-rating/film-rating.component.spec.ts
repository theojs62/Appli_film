import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmRatingComponent } from './film-rating.component';

describe('FilmRatingComponent', () => {
  let component: FilmRatingComponent;
  let fixture: ComponentFixture<FilmRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

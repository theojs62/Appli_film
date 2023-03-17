import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListeComponent } from './film-liste.component';

describe('FilmListeComponent', () => {
  let component: FilmListeComponent;
  let fixture: ComponentFixture<FilmListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

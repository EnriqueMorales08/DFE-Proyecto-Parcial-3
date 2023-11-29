import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploradorJuegosComponent } from './explorador-juegos.component';

describe('ExploradorJuegosComponent', () => {
  let component: ExploradorJuegosComponent;
  let fixture: ComponentFixture<ExploradorJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploradorJuegosComponent]
    });
    fixture = TestBed.createComponent(ExploradorJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

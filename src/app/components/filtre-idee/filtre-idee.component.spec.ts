import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreIdeeComponent } from './filtre-idee.component';

describe('FiltreIdeeComponent', () => {
  let component: FiltreIdeeComponent;
  let fixture: ComponentFixture<FiltreIdeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltreIdeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltreIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

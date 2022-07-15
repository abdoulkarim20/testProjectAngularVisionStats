import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeIdeeComponent } from './liste-idee.component';

describe('ListeIdeeComponent', () => {
  let component: ListeIdeeComponent;
  let fixture: ComponentFixture<ListeIdeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeIdeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

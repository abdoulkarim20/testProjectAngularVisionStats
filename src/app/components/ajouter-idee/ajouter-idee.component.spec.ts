import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterIdeeComponent } from './ajouter-idee.component';

describe('AjouterIdeeComponent', () => {
  let component: AjouterIdeeComponent;
  let fixture: ComponentFixture<AjouterIdeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterIdeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

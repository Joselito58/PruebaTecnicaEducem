import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzamientoComponent } from './lanzamiento.component';

describe('LanzamientoComponent', () => {
  let component: LanzamientoComponent;
  let fixture: ComponentFixture<LanzamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanzamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanzamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

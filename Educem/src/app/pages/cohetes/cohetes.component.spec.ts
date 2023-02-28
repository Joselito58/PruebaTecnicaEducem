import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CohetesComponent } from './cohetes.component';

describe('CohetesComponent', () => {
  let component: CohetesComponent;
  let fixture: ComponentFixture<CohetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CohetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CohetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

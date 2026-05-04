import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonicComponent } from './ultrasonic.component';

describe('UltrasonicComponent', () => {
  let component: UltrasonicComponent;
  let fixture: ComponentFixture<UltrasonicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltrasonicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltrasonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

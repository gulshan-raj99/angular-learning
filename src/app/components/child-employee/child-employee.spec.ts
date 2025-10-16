import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmployee } from './child-employee';

describe('ChildEmployee', () => {
  let component: ChildEmployee;
  let fixture: ComponentFixture<ChildEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildEmployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

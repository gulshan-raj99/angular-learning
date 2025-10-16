import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEmployee } from './parent-employee';

describe('ParentEmployee', () => {
  let component: ParentEmployee;
  let fixture: ComponentFixture<ParentEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentEmployee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

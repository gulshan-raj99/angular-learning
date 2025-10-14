import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualEmployeeDetail } from './individual-employee-detail';

describe('IndividualEmployeeDetail', () => {
  let component: IndividualEmployeeDetail;
  let fixture: ComponentFixture<IndividualEmployeeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualEmployeeDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualEmployeeDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

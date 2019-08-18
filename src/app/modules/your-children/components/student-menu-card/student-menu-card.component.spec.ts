import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMenuCardComponent } from './student-menu-card.component';

describe('StudentMenuCardComponent', () => {
  let component: StudentMenuCardComponent;
  let fixture: ComponentFixture<StudentMenuCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentMenuCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

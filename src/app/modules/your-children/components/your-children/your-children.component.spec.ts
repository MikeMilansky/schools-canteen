import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourChildrenComponent } from './your-children.component';

describe('YourChildrenComponent', () => {
  let component: YourChildrenComponent;
  let fixture: ComponentFixture<YourChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatProfileComponent } from './creat-profile.component';

describe('CreatProfileComponent', () => {
  let component: CreatProfileComponent;
  let fixture: ComponentFixture<CreatProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

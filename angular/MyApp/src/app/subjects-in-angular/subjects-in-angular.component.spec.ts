import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsInAngularComponent } from './subjects-in-angular.component';

describe('SubjectsInAngularComponent', () => {
  let component: SubjectsInAngularComponent;
  let fixture: ComponentFixture<SubjectsInAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsInAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

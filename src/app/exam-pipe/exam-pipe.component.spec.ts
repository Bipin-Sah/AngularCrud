import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPipeComponent } from './exam-pipe.component';

describe('ExamPipeComponent', () => {
  let component: ExamPipeComponent;
  let fixture: ComponentFixture<ExamPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

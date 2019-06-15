import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPanelsComponent } from './project-panels.component';

describe('ProjectPanelsComponent', () => {
  let component: ProjectPanelsComponent;
  let fixture: ComponentFixture<ProjectPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectArticlesComponent } from './project-articles.component';

describe('ProjectArticlesComponent', () => {
  let component: ProjectArticlesComponent;
  let fixture: ComponentFixture<ProjectArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

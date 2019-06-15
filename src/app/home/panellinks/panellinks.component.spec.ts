import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanellinksComponent } from './panellinks.component';

describe('PanellinksComponent', () => {
  let component: PanellinksComponent;
  let fixture: ComponentFixture<PanellinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanellinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanellinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

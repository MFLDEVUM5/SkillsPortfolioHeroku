import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOverViewComponent } from './projects-over-view.component';

describe('ProjectsOverViewComponent', () => {
  let component: ProjectsOverViewComponent;
  let fixture: ComponentFixture<ProjectsOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsOverViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

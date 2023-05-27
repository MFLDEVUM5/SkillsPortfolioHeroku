import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProjectsComponent } from './dev-projects.component';

describe('DevProjectsComponent', () => {
  let component: DevProjectsComponent;
  let fixture: ComponentFixture<DevProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

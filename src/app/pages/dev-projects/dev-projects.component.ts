import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects.model';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-dev-projects',
  templateUrl: './dev-projects.component.html',
  styleUrls: ['./dev-projects.component.css']
})
export class DevProjectsComponent implements OnInit {
  isMobile !: boolean;
  firstProject !: Project;
  devProjects !: Array<Project>;

  constructor(private breakpointObserver: BreakpointObserver, private projectServive : ProjectServiceService) {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile = result.matches;
    });

  }
  ngOnInit(): void {
    this.handleGetDevProjects();
  }

  handleGetDevProjects(){
    this.projectServive.getDevProjects().subscribe({
      next:(data)=>{
        this.firstProject = data[0];
        this.devProjects = data.filter((p,index)=>{
          return index!=0;
        });
      }
    });
  }

}

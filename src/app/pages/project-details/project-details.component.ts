import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/projects.model';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  isMobile !: boolean;
  project !: Project;
  constructor(private breakpointObserver: BreakpointObserver,private route: ActivatedRoute,private projectService : ProjectServiceService) {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = String(routeParams.get('id'));
    this.handleGetProject(id);
  }

  handleGetProject(id :string ) : void{
      this.projectService.getProjectByID(id).subscribe({
        next:(data)=> this.project = data
      });

  }
}

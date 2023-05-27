import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Project } from 'src/app/models/projects.model';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-projects-over-view',
  templateUrl: './projects-over-view.component.html',
  styleUrls: ['./projects-over-view.component.css']
})
export class ProjectsOverViewComponent implements OnInit {
  @Input() isMobile !: boolean;
  projects !: Array<Project>;
  customOptions !: OwlOptions;
  constructor(private projectService:ProjectServiceService) { 
    this.customOptions = {
      autoWidth: true,
      loop: true,
      mouseDrag: false,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        }
      },
      nav: false
      } 
  }

  ngOnInit(): void {
    this.handleGetAllProjects();
  }

  handleGetAllProjects():void{
    this.projectService.getAllProjects().subscribe({
      next : (data)=>{
        this.projects = data;
      }    
    });
  }
}

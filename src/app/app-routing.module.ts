import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DevProjectsComponent } from './pages/dev-projects/dev-projects.component';
import { AiProjectsComponent } from './pages/ai-projects/ai-projects.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { OverViewComponent } from './pages/over-view/over-view.component';

const routes: Routes = [
  { path : '',component :OverViewComponent},
  { path : "overView",component :OverViewComponent},
  {path: "devProjects",component: DevProjectsComponent},
  {path: "aiProjects",component: AiProjectsComponent},
  {path: "projectDetails/:id",component: ProjectDetailsComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

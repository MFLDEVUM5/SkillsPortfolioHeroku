import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ListOfSkillsComponent } from './components/list-of-skills/list-of-skills.component';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProjectsOverViewComponent } from './components/projects-over-view/projects-over-view.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { DevProjectsComponent } from './pages/dev-projects/dev-projects.component';
import { AiProjectsComponent } from './pages/ai-projects/ai-projects.component';
import { AppRoutingModule } from './app-routing.module';
import { OverViewComponent } from './pages/over-view/over-view.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOfSkillsComponent,
    ProjectsOverViewComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectDetailsComponent,
    DevProjectsComponent,
    AiProjectsComponent,
    OverViewComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CarouselModule,
    FontAwesomeModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

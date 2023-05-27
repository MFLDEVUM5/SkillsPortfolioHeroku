import { Injectable } from '@angular/core';
import { Project } from '../models/projects.model';
import { UUID } from 'angular2-uuid';
import { Observable, map, of, switchMap, throwError } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private projects !: Array<Project>;
  private devProjects !: Array<Project> ;
  private aiProjects !: Array<Project> ;


  constructor(private fs:Firestore) { 
    
  }
  
  getProjectsFromFireStore():Observable<Array<Project>>{
    let collectionRef = collection(this.fs,'projects');
    //this.projects = collectionData(collectionRef);
    let ps = collectionData(collectionRef) as Observable<Array<Project>>;
    ps.subscribe({
      next: (data)=>{
        this.projects = data;
      }
    });
    return ps;
  }
  getAllProjects():Observable<Array<Project>>{
    return this.getProjectsFromFireStore();
  }
  getDevProjects():Observable<Array<Project>>{
    if (this.projects == null) {
      const collectionRef = collection(this.fs, 'projects');
      const ps = collectionData(collectionRef) as Observable<Array<Project>>;
  
      // Use the map operator to transform the ps observable into an observable of devProjects
      return ps.pipe(
        map((projects: Project[]) => {
          this.projects = projects;
          this.devProjects = this.projects.filter((p) => p.domaine === 'Dev project');
          return this.devProjects;
        })
      );
    } else {
      // Return an observable of devProjects immediately if projects have already been fetched
      this.devProjects = this.projects.filter((p) => p.domaine === 'Dev project');
      return of(this.devProjects);
    }
  }
  getAiProjects():Observable<Array<Project>>{
    if (this.projects == null) {
      const collectionRef = collection(this.fs, 'projects');
      const ps = collectionData(collectionRef) as Observable<Array<Project>>;
  
      // Use the map operator to transform the ps observable into an observable of devProjects
      return ps.pipe(
        map((projects: Project[]) => {
          this.projects = projects;
          this.aiProjects = this.projects.filter(p=> p.domaine =="Ai project");
          return this.aiProjects;
        })
      );
    } else {
      // Return an observable of devProjects immediately if projects have already been fetched
      this.aiProjects = this.projects.filter(p=> p.domaine =="Ai project");      
      return of(this.aiProjects);
    }
  }

  getProjectByID(id : string) : Observable<Project> {
    if (this.projects == null) {
      const collectionRef = collection(this.fs, 'projects');
      const ps = collectionData(collectionRef) as Observable<Array<Project>>;
  
      // Use the switchMap operator to wait for the ps observable to emit data
      return ps.pipe(
        switchMap((projects: Project[]) => {
          this.projects = projects;
          return of(this.projects.filter((p) => p.ID === id)[0]);
        })
      );
    } else {
      // Return an observable of the project by ID immediately if projects have already been fetched
      return of(this.projects.filter((p) => p.ID === id)[0]);
    }
  }
}

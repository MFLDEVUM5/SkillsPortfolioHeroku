import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { UUID } from 'angular2-uuid';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceList !: Array<Experience>;
  constructor() { 
    this.experienceList = [
      {ID : UUID.UUID(),poste:"Laravel developer",contacts:"zenosofContact@gmail.com",company:"Zenosoft",mission:"dffd",periode:"Juin 2022 - Aout 2022",contract:"intership"}
    ];
  }

  getAllExperience():Observable<Array<Experience>>{
    return of(this.experienceList);
  }
}

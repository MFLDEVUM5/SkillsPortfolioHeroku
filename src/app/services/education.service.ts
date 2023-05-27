import { Injectable } from '@angular/core';
import { Education } from '../models/education.model';
import { UUID } from 'angular2-uuid';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationList !: Array<Education>;
  constructor() { 
    this.educationList =[
      {ID : UUID.UUID(),school:"L’ École Nationale Supérieure d’Informatique et d’Analyse des Systèmes ",domaine:"Data science and iot engineering",periode:"2021-now"},
      {ID : UUID.UUID(),school:"Cpge",domaine:"Math physics",periode:"2019-2021"}
    ];
  }
  getEducation() : Observable<Array<Education>>{
    return of(this.educationList);
  }
}

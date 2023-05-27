import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education !: Array<Education>;
  constructor(private educationService : EducationService) { }

  ngOnInit(): void {
    this.handleGetEducation();
  }
  handleGetEducation() : void{
    this.educationService.getEducation().subscribe({
      next : (data)=>{
        this.education = data;
      }
    });
  }


}

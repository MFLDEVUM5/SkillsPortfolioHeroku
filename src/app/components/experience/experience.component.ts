import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience !: Array<Experience>;
  constructor(private experienceService:ExperienceService) { 
  }

  ngOnInit(): void {
    this.handleGetExperience();
  }

  handleGetExperience():void{
    this.experienceService.getAllExperience().subscribe({
      next:(data)=>{
        this.experience = data;
      }
    })
  }
}

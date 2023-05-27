import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-projects',
  templateUrl: './ai-projects.component.html',
  styleUrls: ['./ai-projects.component.css']
})
export class AiProjectsComponent implements OnInit {
  isMobile !: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
  }

}

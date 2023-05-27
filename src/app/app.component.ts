import { Component } from '@angular/core';
import { faWhatsapp, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  isMobile !: boolean;
  title = 'skillsPortfolio';
  faLinkedinIn = faLinkedin;
  faWhatsapp = faWhatsapp;
  faGithub = faGithub;


  constructor(private breakpointObserver: BreakpointObserver,private contexts: ChildrenOutletContexts) {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  

  

}

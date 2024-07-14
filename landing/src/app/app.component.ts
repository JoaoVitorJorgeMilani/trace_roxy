import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'landing';

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const body = document.getElementsByTagName('body')[0];
        const scrollTo = document.querySelector('#' + this.router.url.substring(2));
        if (scrollTo) {
          body.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          scrollTo.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      });
  }
}

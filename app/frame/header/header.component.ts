import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs/subject';

@Component({
  selector: 'gp-header',
  templateUrl: './header.component.html',
  styles: [`
    #header .g-select .g-select-container{
      width: 150px;
      min-width: 150px;
      color: black;
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<any> = new Subject();
  public currentRouteName: string;
  public currLanguage: string;
  public languages: Array<{key: string, caption: string}> = [];
  public currPlatform: string;
  public platforms: Array<{value: string, text: string}> = [
    {value: '#/intro', text: 'Angular'},
    {value: '../../jquery/app/index.html', text: 'JQuery'}
  ];

  constructor(

    private route: ActivatedRoute,
    private router: Router
  ) {
    this.currPlatform = this.platforms[0].value;
  }

  ngOnInit() {
    this.router.events
      .filter((event: any) => event instanceof NavigationEnd)
      .takeUntil(this.unsubscribe)
      .subscribe(() => {
        let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }

        if (currentRoute.snapshot.component !== undefined) {
          const name: string = currentRoute.snapshot.data.name;
          this.currentRouteName = name;

          /* Check to see if there is a parent title to add */
          const parent = currentRoute.snapshot.parent.url[0];
          if (parent) {
            if (parent.path) {
              const parentName: string = currentRoute.snapshot.parent.data.name;
              this.currentRouteName = this.currentRouteName + ' ' + parentName;
            }
          }

        } else {
          this.currentRouteName = 'Goose';
        }
      });
  }

  changePlatform(platform: string) {
    if (platform.indexOf('jquery') >= 0) {
      location.href = platform;
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}

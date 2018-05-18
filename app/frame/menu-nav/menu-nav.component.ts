import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gp-menu-nav',
  templateUrl: './menu-nav.component.html'
})
export class MenuNavComponent {
  public routes: Array<any> = [];

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.routes = JSON.parse(JSON.stringify(this.router.config));
  }

  getCurrentRoute() {
    console.log(this.currentRoute.root.snapshot.data, this.router);
  }

  filterRoutes(search: string) {
    this.ngOnInit();
    search = search.toLowerCase();
    if (search.length) {
      let filterRoutes = this.routes.filter(route => {
        if (!!route.children) {
          let filterChildren = route.children.filter(routeChild => {
              if (!!routeChild.data && routeChild.data.name.toLowerCase().indexOf(search) >= 0) {
                return true;
              }
              if (!!routeChild.children) {
                let filterGrandchildren = routeChild.children.filter(child => !!child.data && child.data.name.toLowerCase().indexOf(search) >= 0);
                routeChild.children = filterGrandchildren;
                return filterGrandchildren.length ? true : false;
              }
              return false;
          });
          route.children = filterChildren;
          return filterChildren.length ? true : false;
        }
        return false;
      });
      this.routes = filterRoutes;
    }
    this.cdRef.detectChanges();
  }
}

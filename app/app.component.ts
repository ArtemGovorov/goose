import { Component, OnInit } from '@angular/core';
import { SharedService } from '../app/shared/shared.service';
import { GRestService } from '../src/index';

@Component({
  selector: 'gp-app',
  templateUrl: './app.html',
  providers: [SharedService, GRestService],
  styles: [`
    #goose-pages-app { transition: all 0.5s linear; opacity: 0; }
   `]
})

export class AppComponent implements OnInit {
  public currentLanguage: string = 'en-GB';
  constructor(public sharedService: SharedService,
  ) {
  }

  ngOnInit() {
    setTimeout(function () {
      document.getElementById('goose-ng-loader').className += ' g-app-loader--bgfill';
      setTimeout(function () {
        document.getElementById('goose-ng-loader').className += ' g-app-loader--resize';
        setTimeout(function () {
          document.getElementById('goose-pages-app').style.opacity = '1';
        }, 200);
      }, 200);
    }, 0);
    console.log('Current Theme ', this.sharedService.themeItem());
  }
}

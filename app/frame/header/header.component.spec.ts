import { HeaderComponent } from './header.component';

import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GIconComponent } from '../../../src/global/components/icon/g-icon.component';
// import { GFocusDirective } from '../../../src/global/directives/g-focus.directive';
import { SharedService } from '../../shared/shared.service';
import { AppRoutingModule } from '../../app-routing.module';
import { GError } from '../../../src/global/services/g-error.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GUtils } from '../../../src/global/services/g-utils';
import { HttpModule } from '@angular/http';


describe('HeaderComponent ', () => {
  beforeEach(async(() => {
    let fixture;

    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule,
        HttpModule,
        ],
      declarations: [
        HeaderComponent,
        GIconComponent,
      ],
      providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
      SharedService,
      GError,
      GUtils
    ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    TestBed.compileComponents();

    fixture = TestBed.overrideComponent(HeaderComponent, {
      set: {
        template: `
        <div class="row g-palette--primary" id="header">
          <div class="col-md-6 col-md-offset-1">
            <span id="current-page">{{currentRouteName}} </span>
          </div>
          <div class="col-md-5">
            <gp-theme-picker></gp-theme-picker>
          </div>
        </div>
        `
      }
    }).createComponent(HeaderComponent);
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeDefined();
  });

});

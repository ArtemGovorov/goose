import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GIconComponent } from './components/icon/g-icon.component';
import { GCookieService } from './services/g-cookie.service';
import { GUtils } from './services/g-utils';
import { GRestService } from './services/g-http.service';
import { GClickOutsideDirective } from './directives/g-click-outside.directive';
import { GError } from './services/g-error.service';
import { GLinkComponent } from './components/link/g-link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    GIconComponent,
    GLinkComponent,
    GClickOutsideDirective
  ],
  declarations: [
    GIconComponent,
    GLinkComponent,
    GClickOutsideDirective
  ],
  providers: [],
})
export class GGlobalModule { }

export {
  GIconComponent,
  GLinkComponent,
  GCookieService,
  GUtils,
  GError,
  GRestService,
  GClickOutsideDirective
};

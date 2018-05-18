import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { GGlobalModule } from '../../src/index';

const moduleItems = [
  HeaderComponent,
  MenuNavComponent
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    BrowserModule,
    HttpModule,
    GGlobalModule
  ],
  providers: [],
  declarations: [moduleItems ],
  exports: [ moduleItems ]
})
export class FrameModule { }

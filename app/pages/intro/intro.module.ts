import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IntroComponent } from './intro.component';
import { IntroRoutingModule } from './intro-routing.module';
import { SharedModule } from '../../shared/shared.module';
const moduleItems = [
  IntroComponent
];

@NgModule({
  imports: [
    IntroRoutingModule,
    SharedModule,
    HttpModule
  ],
  declarations: moduleItems,
  exports: moduleItems
})
export class IntroModule { }

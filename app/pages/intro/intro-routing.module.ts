import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro.component';

const frameRoutes: Routes = [
  {
    path: 'intro',
    component: IntroComponent,
    data: {
      name: 'Intro'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(frameRoutes)
  ],
  exports: [RouterModule]
})
export class IntroRoutingModule { }

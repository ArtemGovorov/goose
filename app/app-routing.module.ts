import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'intro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true, // needs to be true to work on the CDN
      // enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { GGlobalModule } from '../global/g-global.module';
import { GUtilitySliderModule } from './utility-slider/g-utility-slider.module';

@NgModule({
  imports: [
    GGlobalModule,
    GUtilitySliderModule
  ],
  exports: [
    GGlobalModule,
    GUtilitySliderModule

  ],
  declarations: [
  ],
  providers: [
  ]
})
export class GModulesModule { }

export * from './utility-slider/g-utility-slider.module';

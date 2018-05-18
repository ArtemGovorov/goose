import { GUtilityService } from './g-utility.service';
import { GUtilityPinComponent } from './g-utility-pin.component';
import { GUtilityTriggerComponent } from './g-utility-trigger.component';
import { GUtilitySliderComponent } from './g-utility-slider.component';
import { GUtilityHeaderComponent } from './g-utility-header.component';
import { GUtilityFunctionComponent } from './g-utility-function.component';
import { GUtilityContentComponent, GUtilityContentDividerComponent, GUtilityContentResultsComponent } from './g-utility-content.component';
import { GUtilityFooterComponent } from './g-utility-footer.component';
import { GGlobalModule } from '../../global/g-global.module';
import { NgModule } from '@angular/core';

/**
 * Module containing all UtilitySlider related content
 *
 * @export
 * @class GUtilitySliderModule
 */
@NgModule({
  imports: [GGlobalModule],
  declarations: [
    GUtilityPinComponent,
    GUtilityTriggerComponent,
    GUtilitySliderComponent,
    GUtilityHeaderComponent,
    GUtilityFunctionComponent,
    GUtilityContentComponent,
    GUtilityContentDividerComponent,
    GUtilityContentResultsComponent,
    GUtilityFooterComponent
  ],
  exports: [
    GUtilityPinComponent,
    GUtilityTriggerComponent,
    GUtilitySliderComponent,
    GUtilityHeaderComponent,
    GUtilityFunctionComponent,
    GUtilityContentComponent,
    GUtilityContentDividerComponent,
    GUtilityContentResultsComponent,
    GUtilityFooterComponent
  ]
})
export class GUtilitySliderModule { }

export {
  GUtilityPinComponent,
  GUtilityTriggerComponent,
  GUtilitySliderComponent,
  GUtilityService,
  GUtilityHeaderComponent,
  GUtilityFunctionComponent,
  GUtilityContentComponent,
  GUtilityContentDividerComponent,
  GUtilityContentResultsComponent,
  GUtilityFooterComponent
};

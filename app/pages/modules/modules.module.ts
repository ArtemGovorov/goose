import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UtilitySliderComponent } from './utility-slider/utility-slider.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { CommonModule } from '@angular/common';
import { GModulesModule } from '../../../src/index';

@NgModule({
    imports: [
        ModulesRoutingModule,
        SharedModule,
        CommonModule,
        GModulesModule
    ],
    declarations: [
        UtilitySliderComponent

    ],
    exports: [
        UtilitySliderComponent
    ]
})
export class ModulesModule {}

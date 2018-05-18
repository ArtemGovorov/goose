import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilitySliderComponent } from './utility-slider/utility-slider.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                data: {
                    name: 'Modules'
                },
                children: [
                    {
                        path: 'utility',
                        component: UtilitySliderComponent,
                        data: {
                            name: 'Utility Slider',
                            status: 'alpha'
                        }
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ModulesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons/icons.component';
import { HelpersComponent } from './helpers/helpers.component';
import { LinkComponent } from './link/link.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                data: {
                    name: 'Global'
                },
                children: [
                    {
                        path: 'icons',
                        component: IconsComponent,
                        data: {
                            name: 'Icons',
                            status: 'alpha'
                        }
                    },
                    {
                        path: 'helpers',
                        component: HelpersComponent,
                        data: {
                            name: 'Helpers',
                            status: 'alpha'
                        }
                    },
                    {
                        path: 'link',
                        component: LinkComponent,
                        data: {
                            name: 'Link',
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

export class GlobalRoutingModule { }

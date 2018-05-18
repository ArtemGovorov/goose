import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../global/icons/icons.component';
import { SharedModule } from '../../shared/shared.module';
import { GlobalRoutingModule } from './global-routing.module';
import { HelpersComponent } from './helpers/helpers.component';
import { LinkComponent } from './link/link.component';

const components = [
    IconsComponent,
    HelpersComponent,
    LinkComponent,
];

@NgModule({
    imports: [
        GlobalRoutingModule,
        SharedModule,
        CommonModule
    ],
    declarations: components,
    exports: [components]
})
export class GlobalModule { }

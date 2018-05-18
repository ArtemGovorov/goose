import { IconsComponent } from '../../pages/global/icons/icons.component';
import { Injectable, ComponentFactory } from '@angular/core';

@Injectable()
export class ComponentResolver {
    public getComponentFactoryByName(componentName: string): ComponentFactory<any> {
        return this.components()[componentName];
    }

    private components(): any {
        return {
            'IconComponent': IconsComponent
        };
    }
}

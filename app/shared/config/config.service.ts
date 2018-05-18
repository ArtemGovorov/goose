import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ComponentResolver } from './config-resolver';

@Injectable()
export class ConfigService {
    public getConfig() {
        return new Promise((resolve) => {
            Http.prototype.get('data/shared/config/config.json')
                .map(res => res.json())
                .subscribe(
                    (data: any) => {
                        resolve(true);
                        return data;
                    },
                    err => console.log(err)
                );
        });
    }

    public getRoutes(): any {
        const config = this.getConfig();
        console.log(config);
        const routes = [{
            path: '',
            children: [
            {
                path: 'icon',
                component: ComponentResolver.prototype.getComponentFactoryByName('IconsComponent')
            }]
        }];
        return routes;
    }
}

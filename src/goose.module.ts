import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';

import {
    GGlobalModule,
    GCookieService,
    GUtils,
    GError
} from './global/g-global.module';

import {
    GModulesModule,
    GUtilityService
} from './modules/g-modules.module';


import './rxjs-imports';

@NgModule({
    imports: [
        GGlobalModule,
        GModulesModule
    ],
    exports: [
        GGlobalModule,
        GModulesModule
    ],
})
export class GooseModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: GooseModule,
            providers: [
                GCookieService,
                GUtilityService,
                GUtils,
                GError,
            ]
        };
    }
}

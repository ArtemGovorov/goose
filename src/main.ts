import 'core-js/client/shim';
import 'zone.js/dist/zone';
import '@angular/common';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GooseModule } from './goose.module';
import { environment } from '../app/environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(GooseModule);

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import 'zone.js/dist/zone-testing';

import './rxjs-imports';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

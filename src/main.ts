import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { } from 'node';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

import { app, BrowserWindow } from "electron";
import * as path from "path";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


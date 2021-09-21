import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const extraProviders = [
  { provide: 'API_URL', useValue: 'http://localhost:5000', deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(extraProviders).bootstrapModule(AppModule)
  .catch(err => console.error(err));

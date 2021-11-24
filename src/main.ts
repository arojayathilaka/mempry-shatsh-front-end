import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// export const getBaseUrl = () => 'http://memory-stash-api.azurewebsites.net/api/'
export const getBaseUrl = () => 'https://localhost:5001/api/'

const providers = [
  {provide: 'BASE_URL', useFactory: getBaseUrl, deps: []}
]

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));

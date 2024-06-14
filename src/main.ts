<<<<<<< HEAD
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
=======

import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err))
>>>>>>> main

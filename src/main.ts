import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {registerLicense} from '@syncfusion/ej2-base'
import { AppModule } from './app/app.module';
registerLicense("ORg4AjUWIQA/Gnt2V1hiQllPf0BBQmFJfFBmQmlYdlRydEU3HVdTRHRcQlViSX9Xd0dnWn9XdH0=");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provideRouter, Router } from '@angular/router';
import { wrapperComponent } from './components';
import { AppRoutes } from './routes';
import { tostrService, dynamicLoaderService, loginService } from './services'

var _injects:any = [provideRouter(AppRoutes),tostrService, loginService, dynamicLoaderService];
bootstrap(wrapperComponent, _injects);








"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var components_1 = require('./components');
var routes_1 = require('./routes');
var services_1 = require('./services');
var _injects = [router_1.provideRouter(routes_1.AppRoutes), services_1.tostrService, services_1.loginService, services_1.dynamicLoaderService];
platform_browser_dynamic_1.bootstrap(components_1.wrapperComponent, _injects);
//# sourceMappingURL=main.js.map
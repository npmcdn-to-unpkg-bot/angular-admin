"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var components_1 = require('./components');
var routes_1 = require('./routes');
platform_browser_dynamic_1.bootstrap(components_1.wrapperComponent, [
    router_1.provideRouter(routes_1.AppRoutes)
]);
//# sourceMappingURL=main.js.map
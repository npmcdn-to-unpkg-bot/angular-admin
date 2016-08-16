"use strict";
var components_1 = require('./components');
exports.AppRoutes = [
    { path: '', component: components_1.loginComponent },
    { path: 'application', component: components_1.AppComponent,
        children: [
            { path: '', component: components_1.dashboard },
            { path: 'form', component: components_1.formBasic }
        ]
    },
    { path: 'forget', component: components_1.forgetComponent },
    { path: 'register', component: components_1.registerComponent }
];
exports.PageRoutes = [
    { path: '', component: components_1.dashboard }
];
//# sourceMappingURL=routes.js.map
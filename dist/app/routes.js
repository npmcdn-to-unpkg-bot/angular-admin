"use strict";
var components_1 = require('./components');
var components_2 = require('./components');
exports.AppRoutes = [
    { path: '', component: components_1.loginComponent },
    { path: 'application', component: components_1.AppComponent,
        children: [
            { path: '', component: components_1.dashboard },
            { path: 'form', component: components_2.formBasic },
            { path: 'formAdvanced', component: components_2.formAdvanced },
            { path: 'formWizard', component: components_2.formWizard },
            { path: 'fileUpload', component: components_2.fileUpload },
            { path: 'textEditor', component: components_2.textEditor },
            { path: 'markDown', component: components_2.markDown },
            { path: 'Widgets', component: components_2.Widgets },
            { path: 'Metrics', component: components_2.Metrics }
        ]
    },
    { path: 'forget', component: components_1.forgetComponent },
    { path: 'register', component: components_1.registerComponent }
];
//# sourceMappingURL=routes.js.map
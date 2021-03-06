import { AppComponent, loginComponent, forgetComponent, registerComponent, dashboard } from './components'
import { formAdvanced, formWizard, fileUpload, textEditor, markDown, formBasic, Widgets, Metrics } from './components'

export const AppRoutes = [
  { path: '', component: loginComponent},
  { path: 'application', component: AppComponent, 
    children: [
        { path: '', component: dashboard },
        { path: 'form', component: formBasic },
        { path: 'formAdvanced', component: formAdvanced },
        { path: 'formWizard', component: formWizard },
        { path: 'fileUpload', component: fileUpload },
        { path: 'textEditor', component: textEditor },
        { path: 'markDown', component: markDown },
        { path: 'Widgets', component: Widgets },
        { path: 'Metrics', component: Metrics }
        
        
    ] 
  },
  { path: 'forget', component: forgetComponent },
  { path: 'register', component: registerComponent }
  
];

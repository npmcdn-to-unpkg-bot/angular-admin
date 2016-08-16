import { AppComponent, loginComponent, forgetComponent, registerComponent, dashboard, formBasic } from './components'
export const AppRoutes = [
  { path: '', component: loginComponent},
  { path: 'application', component: AppComponent, 
    children: [
        { path: '', component: dashboard },
        { path: 'form', component: formBasic }
    ] 
  },
  { path: 'forget', component: forgetComponent },
  { path: 'register', component: registerComponent }
  
];

export const PageRoutes = [
  { path: '', component: dashboard }
];
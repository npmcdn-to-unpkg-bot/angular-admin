import { AppComponent, loginComponent, forgetComponent, registerComponent } from './components'
export const AppRoutes = [
  { path: '', component: loginComponent },
  { path: 'application', component: AppComponent },
  { path: 'forget', component: forgetComponent },
  { path: 'register', component: registerComponent }
];
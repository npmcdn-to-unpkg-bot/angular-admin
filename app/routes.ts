import { loginComponent } from './loginComponent/loginComponent'
import { AppComponent } from './app/app.component'

export const AppRoutes = [
  { path: '', component: loginComponent },
  { path: 'application', component: AppComponent }
];
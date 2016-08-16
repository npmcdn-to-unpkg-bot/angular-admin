import { Component } from '@angular/core';
import { dashboardHeader, pageContent } from '../components'

@Component({
  selector: 'dashboard-component',
  templateUrl: 'app/dashboard/dashboard.html',
  directives: [dashboardHeader,pageContent]
})
export class dashboard {
    
}
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('home') home:any
  // sectionId :any = '/home'
  textArr = [
    {
      text: 'Business scope：Sahnon contracting works in Industrial & Commercial Construction & Maintenance works for Civil,Electrical, Mechanical, Fire Fighting, Instrumentation and Manpower Supply',
      dir: 'end'
    },
    {
      text: 'Pursuit：new management mode,perfect technology, excellent service and good quality.',
      dir: 'start'
    },
    {
      text: 'strength：Royal Commission full support.Initial Industrial License already obtained.An agreement already signed with our partner (Chinese Expert Company) on basis of EPC Contract (Engineering, procurement, and construction).They will be our partner by 10% as directed by SIDF. MOU & Know-How agreement (Technology Transfer agreement) already signed Project Visibility Study already submitted',
      dir: 'end'
    },
    {
      text: 'Business principle：honest, win-win cooperation and innovation',
      dir: 'start'
    },
    {
      text: 'Service tenet：We work hard to provide our Clients with the best cost-effective service, adhere to the principle of "customer first" all the time serve our Clients attentively, and move our Clients with our service.',
      dir: 'end'
    },
    {
      text: 'Enterprise spirit: practical,hardworking and responsible ',
      dir: 'start'
    },
    {
      text: 'We have: all Types of Tires ( Heavy Truck, SUV ,SEDAN Car, PICKUP TRUCK, VAN , BEV, etc.)',
      dir: 'end'
    },
  ]
}

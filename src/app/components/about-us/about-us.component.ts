import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
// import AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  ngOnInit(): void {
    Aos.init({
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
    });
  }

}

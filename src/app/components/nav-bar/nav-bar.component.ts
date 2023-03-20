import { Component , HostListener} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public translate:TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en')
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}

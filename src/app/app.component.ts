import { GetTranslateService } from 'src/app/services/get-translate.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sandStone-code';
  constructor(public translate:TranslateService , private GetTranslate:GetTranslateService) {
    translate.addLangs(['en' , 'ar']);
    translate.setDefaultLang('en');
    translate.use('en')
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    // this.GetTranslate.getLang(lang)
  }
}

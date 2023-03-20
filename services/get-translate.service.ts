import { TranslateService } from '@ngx-translate/core';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTranslateService {
  // private lang = new BehaviorSubject<any>([]);
  // currentLang = this.lang.asObservable();

  constructor(public translate: TranslateService) { }

  getTranslation(str:any) {
    const currentLang = this.translate.currentLang; // get current language
    console.log(currentLang);
    const returnValue = this.translate.translations[currentLang][str]; // get converted string from current language
    if (returnValue === undefined) {
      return this.translate.translations.en[str]; // if value is getting undefined then return default language string, en_merch is default english language file here
    } else {
      return returnValue;
    }
  }
}

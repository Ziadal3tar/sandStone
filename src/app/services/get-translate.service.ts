import { TranslateService } from '@ngx-translate/core';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTranslateService {
  // private lang = new BehaviorSubject<any>([]);
  // currentLang1 = this.lang.asObservable();
  currentLang2:any;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    // this.currentLang.subscribe((data: any) => {
    //   console.log(data);
    // })
    // this.currentLang = 'ar'
    // console.log(this.currentLang);
  }
  getLang(lang:any) {
    // this.currentLang2 = lang
    // this.translate.currentLang = lang
    console.log(lang);
  }
  getTranslation(str: any) {
    let currentLang = this.translate.currentLang; // get current language
    // let currentLang = this.currentLang2;
    console.log(currentLang);
    const returnValue = this.translate.translations[currentLang][str]; // get converted string from current language
    if (returnValue === undefined) {
      return this.translate.translations.en[str]; // if value is getting undefined then return default language string, en_merch is default english language file here
    } else {
      return returnValue;
    }
  }
}

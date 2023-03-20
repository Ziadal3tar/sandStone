import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SliderHolderComponent } from './components/slider-holder/slider-holder.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { OurHighlightsComponent } from './components/our-highlights/our-highlights.component';
import { UpBtnComponent } from './components/up-btn/up-btn.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderHolderComponent,
    NavBarComponent,
    FooterComponent,
    ContactUsComponent,
    ServicesComponent,
    AboutUsComponent,
    WhyUsComponent,
    OurWorkComponent,
    OurClientsComponent,
    OurPartnersComponent,
    OurHighlightsComponent,
    UpBtnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'en'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { OurHighlightsComponent } from './components/our-highlights/our-highlights.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'whyUs',component:WhyUsComponent},
  {path:'ourHighlights',component:OurHighlightsComponent},
  {path:'ourWork',component:OurWorkComponent},
  {path:'ourClients',component:OurClientsComponent},
  {path:'services',component:ServicesComponent},
  {path:'ourPartners',component:OurPartnersComponent},
  {path:'contactUs',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

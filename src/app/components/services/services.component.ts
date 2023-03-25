import { GetTranslateService } from '../../services/get-translate.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
// import { transition } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  constructor(public translate: TranslateService , private gTranslate: GetTranslateService){
  }
  ngOnInit(): void {
    // this.gTranslate.currentLang.subscribe((data:any) => {
    //   console.log(data);
    // })
  }

  // types = [
  //   {
  //     imgUrl: '../../../assets/images/ourServices/removeBG/Heavy_Truck2-removebg-preview.png',
  //     title: this.gTranslate.getTranslation('service1'),
  //     // text: 'Summer tires are manufactured for high-heat weather conditions. These feature minimalistic tire treads, which are often ribbed or asymmetric. The footprint is molded from heat-resistant compounds that ensure its secure performance. Summer tires are for above 45°F temperatures.',
  //     dir: 'start'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/ourServices/removeBG/SEDAN_Car1-removebg-preview.png',
  //     title: this.gTranslate.getTranslation('service2'),
  //     // text: 'These tires can handle both warm and cold temperatures, thanks to their flexible compound blends and optimized footprint. They provide traction in dry, wet, and light winter conditions, but they are not for harsh terrain performance.',
  //     dir: 'end'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/ourServices/pickUp3.png',
  //     title: this.gTranslate.getTranslation('service3'),
  //     // text: 'Winter tires feature the most detailed tread patterns, which are designed from stronger winter compounds. Their combination ensures the tires freezing temperature, and ice and snow traction. Winter tires sport the three-peak mountain and snowflake symbol (3PMS) which indicates their severe winter weather applications.',
  //     dir: 'start'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/ourServices/van3.png',
  //     title: this.gTranslate.getTranslation('service4'),
  //     // text: 'Performance tires are really designed for a broad type of automobiles, including sports cars, utility vehicles, and luxury vehicles.These tires focus on providing sharp handling, even at high speeds. They use their stable footprint, stronger structure, and heat-resistance in order to safely perform at their best capability.Wet weather traction is guaranteed with their wide groove placement',
  //     dir: 'end'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/ourServices/removeBG/Transport_buses2-removebg-preview.png',
  //     title: this.gTranslate.getTranslation('service5'),
  //     // text: 'What s great about highway tires is their durability. Not only do they provide a secure performance for SUVs and light trucks, but they guarantee a longer-lasting tread life. They often provide high driving comfort levels as well. They are mostly radial tires, but bias-ply models are also manufactured.',
  //     dir: 'start'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/ourServices/removeBG/Agricultural_Vehicles3-removebg-preview.png',
  //     title: this.gTranslate.getTranslation('service6'),
  //     // text: 'All terrain tires are designed with more aggressive tread designs compared to highway and touring tires. They use their tread blocks to provide off-road traction, while also minimizing discomfort during their on-road drive. AT tire models keep their footprint clean, greatly optimizing their terrain traction. These tires are designed for both on- and off-road performance and most of them offer good comfort levels throughout the drive.',
  //     dir: 'end'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/ourServices/removeBG/suv3-removebg-preview.png',
  //     title: this.gTranslate.getTranslation('service7'),
  //     // text: 'Mud terrain tires are the true royalty of off-road driving. Their aggressive footprints sport large tread blocks and high void ratios, which provide off-road traction and keep the footprint clean. Their primary focus is versatile terrain traction, not on-road driving comfort.',
  //     dir: 'start'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/ourServices/removeBG/Terrain_vehicles5-removebg-preview.png',
  //     title: this.gTranslate.getTranslation('service8'),
  //     // text: 'A touring tire guarantees driving comfort! The primary focus of these models is reduced road noise and vibration levels while providing moderate handling. This is achieved with versatile technologies tire manufacturers use during production',
  //     dir: 'end'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/ourServices/Small Electric vehicles3.webp',
  //     title: this.gTranslate.getTranslation('service9'),
  //     // text: 'A touring tire guarantees driving comfort! The primary focus of these models is reduced road noise and vibration levels while providing moderate handling. This is achieved with versatile technologies tire manufacturers use during production',
  //     dir: 'start'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/ourServices/removeBG/Big_Electric_vehicles5-removebg-preview.png',
  //     title: this.gTranslate.getTranslation('service10'),
  //     // text: 'A touring tire guarantees driving comfort! The primary focus of these models is reduced road noise and vibration levels while providing moderate handling. This is achieved with versatile technologies tire manufacturers use during production',
  //     dir: 'end'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/ourServices/removeBG/taxsi5-removebg-preview.png',
  //     title: this.gTranslate.getTranslation('service11'),
  //     // text: 'A touring tire guarantees driving comfort! The primary focus of these models is reduced road noise and vibration levels while providing moderate handling. This is achieved with versatile technologies tire manufacturers use during production',
  //     dir: 'start'
  //   },
  //   {
  //     imgUrl: '../../../assets/images/toyo-celsius-tire.png',
  //     title: this.gTranslate.getTranslation('service12'),
  //     // text: 'A touring tire guarantees driving comfort! The primary focus of these models is reduced road noise and vibration levels while providing moderate handling. This is achieved with versatile technologies tire manufacturers use during production',
  //     dir: 'end'
  //   },

  // ]
  types = [
    {
      imgUrl: '../../../assets/images/ourServices/Heavy-Truck-2.jpg',
      title: this.gTranslate.getTranslation('service1'),
      // text: 'Summer tires are manufactured for high-heat weather conditions. These feature minimalistic tire treads, which are often ribbed or asymmetric. The footprint is molded from heat-resistant compounds that ensure its secure performance. Summer tires are for above 45°F temperatures.',
      dir: 'start'
    },
    {
      imgUrl: '../../../assets/images/ourServices/SEDAN Car2.jpg',
      title: this.gTranslate.getTranslation('service2'),
      // text: 'These tires can handle both warm and cold temperatures, thanks to their flexible compound blends and optimized footprint. They provide traction in dry, wet, and light winter conditions, but they are not for harsh terrain performance.',
      dir: 'end'
    },
    {
      imgUrl: '../../../assets/images/ourServices/pickUp2.jpg',
      title: this.gTranslate.getTranslation('service3'),
      // text: 'Winter tires feature the most detailed tread patterns, which are designed from stronger winter compounds. Their combination ensures the tires freezing temperature, and ice and snow traction. Winter tires sport the three-peak mountain and snowflake symbol (3PMS) which indicates their severe winter weather applications.',
      dir: 'start'
    },
    {
      imgUrl: '../../../assets/images/ourServices/van2.jpg',
      title: this.gTranslate.getTranslation('service4'),
      // text: 'Performance tires are really designed for a broad type of automobiles, including sports cars, utility vehicles, and luxury vehicles.These tires focus on providing sharp handling, even at high speeds. They use their stable footprint, stronger structure, and heat-resistance in order to safely perform at their best capability.Wet weather traction is guaranteed with their wide groove placement',
      dir: 'end'
    },
    {
      imgUrl: '../../../assets/images/ourServices/Transport buses1.jpg',
      title: this.gTranslate.getTranslation('service5'),
      // text: 'What s great about highway tires is their durability. Not only do they provide a secure performance for SUVs and light trucks, but they guarantee a longer-lasting tread life. They often provide high driving comfort levels as well. They are mostly radial tires, but bias-ply models are also manufactured.',
      dir: 'start'
    },
    {
      imgUrl: '../../../assets/images/ourServices/Agricultural Vehicles2.jpg',
      title: this.gTranslate.getTranslation('service6'),
      // text: 'All terrain tires are designed with more aggressive tread designs compared to highway and touring tires. They use their tread blocks to provide off-road traction, while also minimizing discomfort during their on-road drive. AT tire models keep their footprint clean, greatly optimizing their terrain traction. These tires are designed for both on- and off-road performance and most of them offer good comfort levels throughout the drive.',
      dir: 'end'
    },
    {
      imgUrl: '../../../assets/images/ourServices/suv1.jpg',
      title: this.gTranslate.getTranslation('service7'),
      // text: 'Mud terrain tires are the true royalty of off-road driving. Their aggressive footprints sport large tread blocks and high void ratios, which provide off-road traction and keep the footprint clean. Their primary focus is versatile terrain traction, not on-road driving comfort.',
      dir: 'start'
    },
    {
      imgUrl: '../../../assets/images/ourServices/Terrain vehicles3.jpg',
      title: this.gTranslate.getTranslation('service8'),
      // text: 'A touring tire guarantees driving comfort! The primary focus of these models is reduced road noise and vibration levels while providing moderate handling. This is achieved with versatile technologies tire manufacturers use during production',
      dir: 'end'
    },
    {
      imgUrl: '../../../assets/images/ourServices/Small Electric vehicles1.webp',
      title: this.gTranslate.getTranslation('service9'),
      // text: 'A touring tire guarantees driving comfort! The primary focus of these models is reduced road noise and vibration levels while providing moderate handling. This is achieved with versatile technologies tire manufacturers use during production',
      dir: 'start'
    },
    {
      imgUrl: '../../../assets/images/ourServices/Big Electric vehicles1.jpg',
      title: this.gTranslate.getTranslation('service10'),
      // text: 'A touring tire guarantees driving comfort! The primary focus of these models is reduced road noise and vibration levels while providing moderate handling. This is achieved with versatile technologies tire manufacturers use during production',
      dir: 'end'
    },
    {
      imgUrl: '../../../assets/images/ourServices/Taxis1.png',
      title: this.gTranslate.getTranslation('service11'),
      // text: 'A touring tire guarantees driving comfort! The primary focus of these models is reduced road noise and vibration levels while providing moderate handling. This is achieved with versatile technologies tire manufacturers use during production',
      dir: 'start'
    },
    {
      imgUrl: '../../../assets/images/ourServices/suv2.jpg',
      title: this.gTranslate.getTranslation('service12'),
      // text: 'A touring tire guarantees driving comfort! The primary focus of these models is reduced road noise and vibration levels while providing moderate handling. This is achieved with versatile technologies tire manufacturers use during production',
      dir: 'end'
    },

  ]
}

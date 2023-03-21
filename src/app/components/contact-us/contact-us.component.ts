import { SendemailService } from './../../services/sendemail.service';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formData: FormGroup = new FormGroup({
    name: new FormControl(null , [Validators.required]),
    email: new FormControl(null , [Validators.required,Validators.email]),
    phone: new FormControl(null , [Validators.required]),
    companyName: new FormControl(null , [Validators.required]),
    quantity: new FormControl(null , [Validators.required]),
    notes: new FormControl(null , []),
  })
  constructor(private auth: AuthService , private router: Router,private SendemailService:SendemailService){}

  ngOnInit(): void {
  }
  onSubmit(data: any) {

    this.SendemailService.sendEmail(this.formData.value).subscribe((Data: any) => {
    
      if (Data.message == 'sended') {
        this.router.navigate(['/home'])
      }
    })
  }
}

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
  constructor(private auth: AuthService , private router: Router){}

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('text', data.text);

    this.auth.sendEmail(formData).subscribe((Data: any) => {
      console.log(Data);
      if (Data.message == 'sended') {
        this.router.navigate(['/home'])
      }
    })
  }
}

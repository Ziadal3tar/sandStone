import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url =`http://localhost:4200/contactUs`
  constructor(private http: HttpClient) { }
  sendEmail(data:any):any{
    console.log(data);
    return this.http.post(`${this.url}/sendEmail`,data, {
      headers: {
        mode: 'no-cors'  }
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendemailService {
baseUrl='http://localhost:3000/sendEmail'
  constructor(private HttpClient :HttpClient) { }
  sendEmail(data:any):any{
    console.log(data);

    return this.HttpClient.post(`${this.baseUrl}`,data
     , {
      headers: {
        mode: 'no-cors'  }
    }
    )
  }
}

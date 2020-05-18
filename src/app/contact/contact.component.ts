import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  body: String;
  subject: String;
  name: String;
  email: String;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  sendData() {
    let Url = 'http://localhost:8000/contacts/';
    this.http
      .post(Url, {
        body: this.body,
        subject: this.subject,
        contact_name: this.name,
        contact_email: this.email,
      })
      .toPromise()
      .then((data: any) => {
        console.log(data);
      });
  }
}

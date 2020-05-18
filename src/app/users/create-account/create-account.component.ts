import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  createAccountView() {
    this.route.navigate(['create-account']);
  }
}

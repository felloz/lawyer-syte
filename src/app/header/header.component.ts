import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  home() {
    this.router.navigate(['']);
  }

  about() {
    this.router.navigate(['about']);
  }

  services() {
    this.router.navigate(['services']);
  }

  caseStudies() {
    this.router.navigate(['case-studies']);
  }

  contact() {
    this.router.navigate(['contact']);
  }

  blog() {
    this.router.navigate(['blog']);
  }

  blogDetails() {
    this.router.navigate(['blog-details']);
  }

  element() {
    this.router.navigate(['element']);
  }

  caseDetails() {
    this.router.navigate(['case-details']);
  }

  createAccountView() {
    this.router.navigate(['create-account']);
  }
}

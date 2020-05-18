import { Component, OnInit } from '@angular/core';
import { LawyersService } from '../serviceRest/lawyers.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  data: Array<any>;

  constructor(private lawservice: LawyersService) {
    this.data = new Array<any>();
  }

  ngOnInit() {
    this.lawservice.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

  //getDataFromAPI() {}
}

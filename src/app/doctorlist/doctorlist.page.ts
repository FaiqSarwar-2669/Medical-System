import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.page.html',
  styleUrls: ['./doctorlist.page.scss'],
})
export class DoctorlistPage implements OnInit {

  isBottom: boolean = false;
  isFilterClicked: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  filter(event: Event){
    this.isBottom = !this.isBottom;
    this.isFilterClicked = !this.isFilterClicked;
  }
}

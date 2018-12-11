import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

// @ts-ignore
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'personal-info-show',
  templateUrl: './personal-info-show.component.html',
  styleUrls: ['./personal-info-show.component.css']
})
export class PersonalInfoShowComponent implements OnInit {

  data = {
    oneChild: '',
    twoChild: '',
    threeChild: '',
    fourChild: '',
    fiveChild: ''
  };

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit() {
    this.generateData();
  }

  public generateData() {

    const tmp = localStorage.getItem('test').split(',');
    console.log(tmp);
    if (tmp) {
      this.data.oneChild = tmp[0];
      this.data.twoChild = tmp[1];
      this.data.threeChild = tmp[2];
      this.data.fourChild = tmp[3];
      this.data.fiveChild = tmp[4];
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'two-child',
  templateUrl: './two-child.component.html',
  styleUrls: ['./two-child.component.css']
})
export class TwoChildComponent implements OnInit {

  add;

  data = {
    oneChild : '',
    twoChild :  '',
    threeChild : '',
    fourChild : '',
    fiveChild:''
  };

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.generateData();
  }

  generateData() {

    const tmp = localStorage.getItem('test').split(',');
    console.log(tmp);
    if (tmp) {
      this.data.oneChild = tmp[0];
      this.data.twoChild = tmp[1];
      this.data.threeChild = tmp[2];
      this.data.fourChild = tmp[3];
      this.data.fiveChild = tmp[4];
    }
    // let key = localStorage;
    // const that = this;
    // that.twoChild = that.appService.inputValue;
    // const a = that.twoChild.split(',');
    // console.log(a);
    // const lb = document.getElementsByTagName('input');
    // for (let i = 0 ; i < lb.length; i ++) {
    //   if (a[i] === 'undefined') {
    //     // tslint:disable-next-line:no-unused-expression
    //     a[i] = '无';
    //   }
    //   lb[i].value = a[i];
    // }
    // key = a;
    // console.log(key + 'aaa');
  }
}

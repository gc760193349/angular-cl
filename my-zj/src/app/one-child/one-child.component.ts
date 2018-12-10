import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'one-child',
  templateUrl: './one-child.component.html',
  styleUrls: ['./one-child.component.css']
})
export class OneChildComponent {
  data = {
  oneChild : '',
  twoChild :  '',
  threeChild : '',
  fourChild : '',
  fiveChild: ''
};

  constructor(
    private appService: AppService
  ) { }
  submitted = false;
  saveDate() {
    // tslint:disable-next-line:max-line-length
    this.appService.inputValue = this.data.oneChild + ',' + this.data.twoChild + ',' + this.data.threeChild + ',' + this.data.fiveChild + ',' + this.data.fourChild;
    localStorage.setItem('test', this.appService.inputValue);
  }
  onSubmit() {
    this.submitted = true;
  }
}

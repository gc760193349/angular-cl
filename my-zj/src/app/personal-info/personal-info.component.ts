import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { CanActivate } from "@angular/router";

// @ts-ignore
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  data = {
    oneChild: '',
    twoChild: '男',
    threeChild: '',
    fourChild: '',
    fiveChild: ''
  };

  constructor(
    private appService: AppService
  ) {
  }

  submitted = false;

  public saveDate() {
    // tslint:disable-next-line:max-line-length
    this.appService.inputValue = this.data.oneChild + ',' + this.data.twoChild + ',' + this.data.threeChild + ',' + this.data.fiveChild + ',' + this.data.fourChild;
    localStorage.setItem('test', this.appService.inputValue);
  }

  public onSubmit() {
    this.submitted = true;
  }
}

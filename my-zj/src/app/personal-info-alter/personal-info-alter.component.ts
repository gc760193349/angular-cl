import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

// @ts-ignore
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'personal-info-alter',
  templateUrl: './personal-info-alter.component.html',
  styleUrls: ['./personal-info-alter.component.css']
})
export class PersonalInfoAlterComponent implements OnInit {
  data = {
    oneChild: '',
    twoChild: '',
    threeChild: '',
    fourChild: '',
    fiveChild: ''
  };

  constructor(
    private appService: AppService, private router: Router
  ) {
  }

  submitted = false;

  ngOnInit() {
    const tsv = localStorage.getItem('test').split(',');
    this.data.oneChild = tsv[0];
    this.data.twoChild = tsv[1];
    this.data.threeChild = tsv[2];
    this.data.fourChild = tsv[3];
    this.data.fiveChild = tsv[4];
  }

  public onSubmit() {
    this.submitted = true;
  }

  public sendData() {
    // const arr = document.getElementsByTagName('input');
    // const newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //   newArr[i] = arr[i].value;
    // }
    // @ts-ignore
    this.appService.inputValue = this.data.oneChild + "," + this.data.twoChild + "," + this.data.threeChild + "," + this.data.fourChild + "," + this.data.fiveChild;
    localStorage.setItem('test', this.appService.inputValue);
    this.router.navigate(['personalInfoShow']);
  }

  public noSave() {
    const arr = document.getElementsByTagName('input');
    const newArr = [];
    const tsv = localStorage.getItem('test').split(',');
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i].value;
    }
    if (newArr[0] == tsv[0] && newArr[1] == tsv[1] && newArr[2] == tsv[2] && newArr[3] == tsv[2] && newArr[4] == tsv[4]) {
      this.router.navigate(['personalInfoShow']);
    } else {
      this.router.navigate(['personalInfoShow']);
    }
  }
}

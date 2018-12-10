import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'three-child',
  templateUrl: './three-child.component.html',
  styleUrls: ['./three-child.component.css']
})
export class ThreeChildComponent implements OnInit {
  data = {
    oneChild : '',
    twoChild :  '',
    threeChild : '',
    fourChild : '',
    fiveChild:''
  };
  constructor(
    private appService: AppService, private router: Router
  ) { }
  submitted = false;
  ngOnInit() {
    const tsv =  localStorage.getItem('test').split(',');
    this.data.oneChild = tsv[0];
    this.data.twoChild = tsv[1];
    this.data.threeChild = tsv[2];
    this.data.fourChild = tsv[3];
    this.data.fiveChild = tsv[4];

  }
  onSubmit() {
    this.submitted = true;
  }
  sendData() {
    const arr = document.getElementsByTagName('input');
    const newarr = [];
    for (let i =0;i<arr.length;i++){
      newarr[i] =arr[i].value;
    }
    console.log(newarr);
    this.appService.inputValue = newarr;
    localStorage.setItem('test', this.appService.inputValue);
    this.router.navigate(['twochild']);
  }
  noSave(){
    const arr = document.getElementsByTagName('input');
    const newarr = [];
    const tsv =  localStorage.getItem('test').split(',');
    for (let i =0;i<arr.length;i++){
      newarr[i] =arr[i].value;
    }
    if(newarr[0] == tsv[0] && newarr[1] == tsv[1] && newarr[2] == tsv[2] && newarr[3] == tsv[2] && newarr[4] == tsv[4]){
      alert("你的数据未改变")
      this.router.navigate(['twochild']);
    }else {
      alert("你的数据已改变，未保存");
      this.router.navigate(['twochild']);
    }
  }
}

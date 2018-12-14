import { Component, OnInit } from '@angular/core';

declare var  AMap: any;

@Component({
  selector: 'app-train-four',
  templateUrl: './train-four.component.html',
  styleUrls: ['./train-four.component.css']
})
export class TrainFourComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.getMap ();
  }
  getMap(){
    let map = new AMap.Map('container', {
      resizeEnable: true,
      zoom:11,
      center: [116.397428, 39.90923]
    });
  }
}

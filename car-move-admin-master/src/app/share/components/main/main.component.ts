import { Component, OnInit } from '@angular/core';


// @ts-ignore
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  panels = [
    {
      active    : true,
      name      : '首页',
      disabled  : false
    }
  ];
  constructor(
  ) { }

  ngOnInit() {
  }

  public refresh() {
    window.location.reload();
  }
}

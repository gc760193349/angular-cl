import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.less']
})
export class ManagementComponent implements OnInit {
  panels = [
    {
      active: true,
      name: '链接管理',
      disabled: false,
      data: '链接管理'
    },
    {
      active: true,
      name: '用户管理',
      disabled: false,
      data: '用户管理'
    }
  ];

  constructor(
    private route: Router
  ) {
  }

  ngOnInit() {
  }
}

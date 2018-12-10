import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    private appService: AppService, private router: Router
  ) {
    if (localStorage.getItem('test')) {
      this.router.navigate(['twochild']);
    }
  }


  onIndexChange(event) {
    console.log(event);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from "rxjs";
import { GlobalMoodServiceService } from "../../global-mood-service.service";

@Component({
  selector: 'app-train-three',
  templateUrl: './train-three.component.html',
  styleUrls: ['./train-three.component.css']
})

export class TrainThreeComponent implements OnInit, OnDestroy {
  private timeInterval: Subscription;


  constructor(private globalMoodServiceService: GlobalMoodServiceService,) {

  }

  ngOnInit() {
    let show = document.getElementById('text');
    show.innerHTML = new Date().getFullYear() + "年" + new Date().getMonth() + "月" + new Date().getDay() + "日"
      + new Date().getHours() + "时" + new Date().getMinutes() + "分" + new Date().getSeconds() + "秒";
    this.timeInterval = interval(1000).subscribe(() =>
      show.innerHTML = new Date().getFullYear() + "年" + new Date().getMonth() + "月" + new Date().getDay() + "日" +
        new Date().getHours() + "时" + new Date().getMinutes() + "分" + new Date().getSeconds() + "秒"
    )
  }

  ngOnDestroy() {
    this.timeInterval.unsubscribe();
    console.log(1);
  }
}

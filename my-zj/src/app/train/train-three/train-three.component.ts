import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from "rxjs";
import {GlobalMoodServiceService} from "../../global-mood-service.service";

@Component({
  selector: 'app-train-three',
  templateUrl: './train-three.component.html',
  styleUrls: ['./train-three.component.css']
})

export class TrainThreeComponent implements OnInit {
  public intervalTime: 1000;



  constructor(private globalMoodServiceService:GlobalMoodServiceService) {

  }

  ngOnInit() {
    let show = document.getElementById('text');
    const time = interval(this.intervalTime);
    time.subscribe(() =>
      show.innerHTML = new Date().toString());

  }
}

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
  private timeshow:any =  '';


  constructor(private globalMoodServiceService: GlobalMoodServiceService,) {

  }

  ngOnInit() {

    this.timeshow = new Date();
    this.timeInterval = interval(1000).subscribe(() =>
      this.timeshow = new Date()
    )
  }

  ngOnDestroy() {
    this.timeInterval.unsubscribe();
    console.log(1);
  }
}

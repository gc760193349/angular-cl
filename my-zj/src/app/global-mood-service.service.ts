import { Injectable } from '@angular/core';
import { interval } from "rxjs";
import { Subscription } from "rxjs";

const GlobalData = [
  "111",
  "222",
  "333",
  "444",
  "555",
  "666",
];

@Injectable({
  providedIn: 'root'
})
export class GlobalMoodServiceService {
  public startValue = '开始';
  public boolean = true;
  public num = 0;
  globalData = [];
  private continueSubscription: Subscription;

  constructor() {
    this.ngOnInit();

  }

  ngOnInit() {
  }

  getData() {
    const random: number = Math.random() * 6;
    // @ts-ignore
    this.GlobalData.push(GlobalData[parseInt([random])]);
    console.log(this.globalData);
  }

  getStart() {
    this.boolean = false;
    if (this.startValue == "开始") {
      this.startValue = "暂停";
      this.continueSubscription = interval(1000).subscribe(() =>
        this.num++
      );
    } else if (this.startValue == "暂停") {
      this.continueSubscription.unsubscribe();
      this.startValue = "继续";
    } else if (this.startValue == "继续") {
      this.startValue = "暂停";
      this.continueSubscription = interval(1000).subscribe(() =>
        this.num++
      )
    }
  }

  getStop() {
    this.boolean = true;
    this.startValue = "开始";
    this.num = 0;
    this.continueSubscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { MomentMoodServiceService } from "../../moment-mood-service.service";
import { GlobalMoodServiceService } from "../../global-mood-service.service";

@Component({
  selector: 'app-train-two',
  templateUrl: './train-two.component.html',
  styleUrls: ['./train-two.component.css'],
  providers: [MomentMoodServiceService]
})
export class TrainTwoComponent implements OnInit {

  moentData = [];
  globalData = [];


  constructor(
    private moodServe: MomentMoodServiceService,
    private globalServe: GlobalMoodServiceService
  ) {

  }

  ngOnInit() {
    this.globalData = this.globalServe.GlobalData;
  }

  public getAData() {
    const randnum: number = Math.random() * 7;
    this.moentData.push(this.moodServe.MonmentData[parseInt(String(randnum))]);
  };

  public getGData() {
    this.globalServe.getData();
  }
}

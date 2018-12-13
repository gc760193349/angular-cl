import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalMoodServiceService {

  GlobalData = [];
  Globaldata = [
    "111",
    "222",
    "333",
    "444",
    "555",
    "666",
  ];
  constructor() {

  }
  getData(){
    const random:number = Math.random() * 6;
    // @ts-ignore
    this.GlobalData.push(this.Globaldata[parseInt([random])]);
    console.log(this.GlobalData);
  }
}

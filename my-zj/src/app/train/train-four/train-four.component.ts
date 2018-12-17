import { Component, OnInit } from '@angular/core';

declare var AMap: any;
declare var AMapUI: any;

@Component({
  selector: 'app-train-four',
  templateUrl: './train-four.component.html',
  styleUrls: ['./train-four.component.css']
})
export class TrainFourComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.getMap();
  }

  getMap(): void {
    let map: any = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 30,
      center: [123.44778, 41.72246],
      isHotspot: true
    });

    AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow) => {

      let marker: any = new AMap.Marker({
        map: map,
        zIndex: 9999999,
        position: map.getCenter()
      });

      let infoWindow: any = new SimpleInfoWindow({

        infoTitle: "信息",
        infoBody: '姓名:<%- name %> </br>  性别:<%- sex %> </br> 年龄:<%- age %> </br> 电话:<%- tel %> </br> 地址:<%- add %>',
        infoTplData: {
          name: localStorage.getItem('test').split(',')[0],
          sex: localStorage.getItem('test').split(',')[1],
          age: localStorage.getItem('test').split(',')[2],
          tel: localStorage.getItem('test').split(',')[3],
          add: localStorage.getItem('test').split(',')[4],
        },

        //基点指向marker的头部位置
        offset: new AMap.Pixel(0, -31)
      });

      let openInfoWin = (): void => {
        infoWindow.open(map, marker.getPosition());
      };

      //marker 点击时打开
      AMap.event.addListener(marker, 'click', (): void => {
        openInfoWin();
      });

      openInfoWin();
    });
    let placeSearch = new AMap.PlaceSearch();  //构造地点查询类
    let infoWindow = new AMap.AdvancedInfoWindow({});
    map.on('hotspotclick',  (result) => {
      placeSearch.getDetails(result.id, function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          placeSearch_CallBack(result);
        }
      });


      //回调函数
      let placeSearch_CallBack = (data: any): void => {
        let poiArr: any = data.poiList.pois;
        let location: any = poiArr[0].location;
        infoWindow.setContent(createContent(poiArr[0]));
        infoWindow.open(map, location);
      };

      let createContent = (poi: any): string => {  //信息窗体内容
        let s: any = [];
        s.push('<div class="info-title">' + poi.name + '</div><div class="info-content">' + "地址：" + poi.address);
        s.push("电话：" + poi.tel);
        s.push("类型：" + poi.type);
        s.push('</div>');
        return s.join("<br>");
      }
    })
  }
}

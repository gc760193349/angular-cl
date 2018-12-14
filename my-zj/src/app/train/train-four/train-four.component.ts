import { Component, OnInit } from '@angular/core';

declare var AMap: any;
declare var AMapUI: any;

@Component({
  selector: 'app-train-four',
  templateUrl: './train-four.component.html',
  styleUrls: ['./train-four.component.css']
})
export class TrainFourComponent implements OnInit {

  personalInfo = [];

  constructor() {
  }

  ngOnInit() {
    this.personalInfo = localStorage.getItem('test').split(',');
    this.getMap();
  }

  getMap() {
    let map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 30,
      center: [123.44778, 41.72246],
      isHotspot: true
    });

    AMapUI.loadUI(['overlay/SimpleInfoWindow'], function (SimpleInfoWindow) {

      let marker = new AMap.Marker({
        map: map,
        zIndex: 9999999,
        position: map.getCenter()
      });

      let infoWindow = new SimpleInfoWindow({

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

      function openInfoWin() {
        infoWindow.open(map, marker.getPosition());
      }

      //marker 点击时打开
      AMap.event.addListener(marker, 'click', function () {
        openInfoWin();
      });

      openInfoWin();
    });

    let placeSearch = new AMap.PlaceSearch();  //构造地点查询类
    let infoWindow = new AMap.AdvancedInfoWindow({});
    map.on('hotspotclick', function (result) {
      placeSearch.getDetails(result.id, function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          placeSearch_CallBack(result);
        }
      });
    });

    //回调函数
    function placeSearch_CallBack(data) { //infoWindow.open(map, result.lnglat);
      let poiArr = data.poiList.pois;
      let location = poiArr[0].location;
      infoWindow.setContent(createContent(poiArr[0]));
      infoWindow.open(map, location);
    }

    function createContent(poi) {  //信息窗体内容
      let s = [];
      s.push('<div class="info-title">' + poi.name + '</div><div class="info-content">' + "地址：" + poi.address);
      s.push("电话：" + poi.tel);
      s.push("类型：" + poi.type);
      s.push('<div>');
      return s.join("<br>");
    }

  }
}

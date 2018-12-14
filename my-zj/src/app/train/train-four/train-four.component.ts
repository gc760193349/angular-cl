import { Component, OnInit } from '@angular/core';

declare var AMap: any;
declare var AMapUI: any;
let map: any;

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
    this.maker();
  }

  getMap() {
    map = new AMap.Map('container', {
      zoom: 4,
    });
    AMap.plugin(['AMap.ToolBar'], function () {
      map.addControl(new AMap.ToolBar({
        map: map
      }));
    });
  }

  maker() {
    AMapUI.load(['overlaySimpleMaker'], function (SimpleMarker) {
      let lngLats = getGridLngLats(map.getCenter(), 4, 4, 0, 0);
      new SimpleMarker({
        iconLabel: 'A',
        map: map,
        position: lngLats[0]
      });
      new SimpleMarker({
        containerClassNames: 'my-marker', //普通文本
        iconLabel: 'BC', iconStyle: 'green', map: map, position: lngLats[1]
      });
      new SimpleMarker({ //设置节点属性
        iconLabel: { //普通文本
          innerHTML: '热', //设置样式
          style: {
            color: '#fff', fontSize: '120%', marginTop: '2px'
          }
        }, iconStyle: 'red', map: map, position: lngLats[2]
      });
      new SimpleMarker({
        iconLabel: { //html
          innerHTML: '<div class="my-blue-point"><img src="//webapi.amap.com/theme/v1.3/hotNew.png"/></div>',
        }, iconStyle: 'black', map: map, position: lngLats[3]
      });
    });

    function getGridLngLats(center, colNum, size, cellX, cellY) {
      let pxCenter = map.lnglatToPixel(center);
      let rowNum = Math.ceil(size / colNum);
      let startX = pxCenter.getX(), startY = pxCenter.getY();
      cellX = cellX || 70;
      cellY = cellY || 70;
      let lngLats = [];
      for (let r = 0; r < rowNum; r++) {
        for (let c = 0; c < colNum; c++) {
          let x = startX + (c - (colNum - 1) / 2) * (cellX);
          let y = startY + (r - (rowNum - 1) / 2) * (cellY);
          lngLats.push(map.pixelToLngLat(new AMap.Pixel(x, y)));
          if (lngLats.length >= size) {
            break;
          }
        }
      }
      return lngLats;
    }
  }
}

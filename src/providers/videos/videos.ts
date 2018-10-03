import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import 'rxjs/add/operator/map'
/*
  Generated class for the VideosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VideosProvider {
  constructor(public http: HttpClient,private platform: Platform) {
  }
  getList() {
    var apiUrl = '/list'
    if(this.platform.is('core') == true) {
      apiUrl = '/list'
    } else {
      apiUrl = 'http://59.110.166.119/getList'
    }
    const headers = new HttpHeaders().set("Content-Type", "text/plain");
    return this.http.get(apiUrl,{headers}).map(res => res)
  }
  clickRecord(deviceId,detailId) {
    var apiUrl = '/clickRecord'
    if(this.platform.is('core') == true) {
      apiUrl = '/clickRecord'
    } else {
      apiUrl = 'http://59.110.166.119/clickRecord'
    }
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(apiUrl,{deviceId: deviceId, detailId: detailId},{headers}).subscribe(res => res)
  }
  favorRecord(deviceId,detailId) {
    var apiUrl = '/favorRecord'
    if(this.platform.is('core') == true) {
      apiUrl = '/favorRecord'
    } else {
      apiUrl = 'http://59.110.166.119/favorRecord'
    }
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(apiUrl,{deviceId: deviceId, detailId: detailId},{headers}).subscribe(res => res)
  }
}

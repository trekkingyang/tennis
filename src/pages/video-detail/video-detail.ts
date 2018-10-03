import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Platform } from "ionic-angular";
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { VideosProvider } from "../../providers/videos/videos";


/**
 * Generated class for the VideoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-detail',
  templateUrl: 'video-detail.html',
})
export class VideoDetailPage {
  detailData: any;
  uuId: string;
  isFavorite: boolean;
  favoriteData: object;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public sanitizer: DomSanitizer,
              private storage: Storage,
              private screenOrientation: ScreenOrientation,
              private uniqueDeviceID: UniqueDeviceID,
              public videoProvider: VideosProvider,
              private platform: Platform) {
    this.detailData = navParams.data
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        this.uuId = uuid
      })
      .catch((error: any) => console.log(error));
  }

  ionViewWillEnter() {
    this.videoProvider.clickRecord(this.uuId, this.detailData.id)
    this.setLandscape()
  }
  ionViewDidLoad() {
    this.storage.get('favorite').then(data => {
      if(data != null) {
        this.favoriteData = JSON.parse(data)
      } else {
        this.favoriteData = {}
      }
      if(this.favoriteData && this.favoriteData[this.detailData.id.toString()]) {
        this.isFavorite = true
      } else {
        this.isFavorite = false
      }
    })
    this.detailData.url = `http://v.qq.com/iframe/player.html?vid=${this.detailData.video_id}&amp;auto=0`
  }
  ionViewWillLeave() {
    this.setPortrait()
  }
  favorite() {
    if(this.isFavorite) {
      delete(this.favoriteData[this.detailData.id])
      this.storage.set('favorite',JSON.stringify(this.favoriteData))
    } else {
      this.videoProvider.favorRecord(this.uuId, this.detailData.id)
      this.favoriteData[this.detailData.id] = this.detailData
      this.storage.set('favorite',JSON.stringify(this.favoriteData))
    }
    this.isFavorite = !this.isFavorite
  }
  setPortrait() {
    if(this.platform.is('core') != true) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
  }
  setLandscape() {
    if(this.platform.is('core') != true) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { VideoDetailPage } from "../video-detail/video-detail";

/**
 * Generated class for the CollectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collect',
  templateUrl: 'collect.html',
})
export class CollectPage {
  dataList = [];
  favoriteData: object;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {

  }

  ionViewDidLoad() {
    this.storage.get('favorite').then(data => {
      if(data != null) {
        data = JSON.parse(data)
        let keys = Object.keys(data)
        keys.forEach(item => {
          this.dataList.push(data[item])
        })
      }
    })
  }
  showDetail(item) {
    this.navCtrl.push(VideoDetailPage,item)
  }


}

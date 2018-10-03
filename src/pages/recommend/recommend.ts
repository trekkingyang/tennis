import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoDetailPage } from "../video-detail/video-detail";
import { VideosProvider } from "../../providers/videos/videos";

/**
 * Generated class for the RecommendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recommend',
  templateUrl: 'recommend.html',
})
export class RecommendPage {
  dataList = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public videoProvider: VideosProvider) {

  }
  ionViewWillEnter() {
    this.videoProvider.getList().subscribe((data:any) => {
        this.dataList = data.data
      })
  }

  ionViewDidLoad() {

  }
  showDetail(item) {
    this.navCtrl.push(VideoDetailPage,item)
  }

}

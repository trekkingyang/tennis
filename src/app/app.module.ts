import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecommendPage } from "../pages/recommend/recommend";
import { SpecialPage } from "../pages/special/special";
import { ClassicPage } from "../pages/classic/classic";
import { CoursePage } from "../pages/course/course";
import { CollectPage } from "../pages/collect/collect";
import { VideoDetailPage } from "../pages/video-detail/video-detail";
import { ImageDetailPage } from "../pages/image-detail/image-detail";
import { ArticleDetailPage } from "../pages/article-detail/article-detail";
import { TabsPage } from '../pages/tabs/tabs';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VideosProvider } from '../providers/videos/videos';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';


@NgModule({
  declarations: [
    MyApp,
    SpecialPage,
    RecommendPage,
    ClassicPage,
    CoursePage,
    CollectPage,
    VideoDetailPage,
    ImageDetailPage,
    ArticleDetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom',tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpecialPage,
    RecommendPage,
    ClassicPage,
    CoursePage,
    CollectPage,
    VideoDetailPage,
    ImageDetailPage,
    ArticleDetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    UniqueDeviceID,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideosProvider
  ]
})
export class AppModule {}

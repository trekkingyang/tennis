import { Component } from '@angular/core';

import { CollectPage } from "../collect/collect";
import { RecommendPage } from "../recommend/recommend";
import { CoursePage } from "../course/course";
import { SpecialPage } from "../special/special";
import { ClassicPage } from "../classic/classic";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RecommendPage;
  tab2Root = CoursePage;
  tab3Root = SpecialPage;
  tab4Root = CollectPage;
  tab5Root = ClassicPage;


  constructor() {

  }
}

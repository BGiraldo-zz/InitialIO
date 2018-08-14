import { SettingsPage } from './../settings/settings';
import { MainPage } from './../main/main';
import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;

  constructor() {
    this.tab1 = MainPage;
    this.tab2 = SettingsPage;
  }

}

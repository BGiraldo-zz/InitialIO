import { Settings2Page } from './../pages/settings2/settings2';
import { TabsPage } from './../pages/tabs/tabs';
import { MainPage } from './../pages/main/main';
import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage = TabsPage;
  settings2Page = Settings2Page;

  rootPage:any = TabsPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage( page:any ){

    this.rootPage = page;
    this.menuCtrl.close();

  }

}


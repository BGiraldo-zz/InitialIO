import { ModalPage } from './../modal/modal';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  goToMainPage(){
    this.navCtrl.parent.select(1);
  }

  openModal(){
      let model = this.modalCtrl.create( ModalPage, { name: "pepito", age: 12} );
      model.present();
      model.onDidDismiss(params => {
        if(params)
          console.log( params );
      });
  }

}

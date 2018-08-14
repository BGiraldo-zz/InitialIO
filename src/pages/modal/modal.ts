import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  closeModalWithParams(){
    let data = {
      name: "carlistos",
      age: 15,
      site:{
        long: 12.4,
        lat: 15.7
      }
    };

    this.viewCtrl.dismiss( data );

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}

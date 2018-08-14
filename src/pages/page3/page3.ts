import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';


@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  mutante:any = {};

  constructor(public navParams: NavParams, public navController:NavController) {

    this.mutante = this.navParams.get("personaje");

  }

  backScreen(){
    this.navController.pop();
  }

  backToRoot(){
    this.navController.popToRoot();
  }

}

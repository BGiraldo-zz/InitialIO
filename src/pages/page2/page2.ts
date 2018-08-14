import { Page3Page } from './../page3/page3';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  mutantes:any[] = [

    {
      "nombre":"Wolverine",
      "poder":"Super regeneración"
    },
    {
      "nombre":"Bestia",
      "poder":"Obtiene poderes de un animal"
    },
    {
      "nombre":"Magneto",
      "poder":"Puede controlar el metal"
    },
    {
      "nombre":"Deadpool",
      "poder":"Tiene super regeneración y es habil con las armas"
    },
    {
      "nombre":"Gambito",
      "poder":"Magnetiza objetos"
    }
  ];

  page3:any = Page3Page;

  constructor(public navCtrl:NavController, public navParams:NavParams){}

  navigate_page3(mutante:any){

    this.navCtrl.push( Page3Page, {"personaje":mutante} );

  }

}

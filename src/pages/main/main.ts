import { Page2Page } from './../page2/page2';
import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  page2:any = Page2Page;

  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController) {
  }

  navegar_pagina(){
    this.navCtrl.push(Page2Page);
  }

  openMenu(){
    this.menuCtrl.toggle();
  }

}

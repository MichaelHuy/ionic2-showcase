import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Singup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html'
})
export class SingupPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SingupPage Page');
  }

}

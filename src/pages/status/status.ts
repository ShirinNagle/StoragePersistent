import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  emotion :string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }
  onSave(){
    console.log(this.emotion);
    this.storage.set("status", this.emotion);
    this.navCtrl.pop();
  }
}

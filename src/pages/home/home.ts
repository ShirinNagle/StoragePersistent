import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  information:string;
  constructor(public navCtrl: NavController,
     private storage:Storage) {

  }

  openStausPage(){
    this.navCtrl.push('StatusPage');//lazy loading
  }
  ionViewWillEnter(){
    this.storage.get("status")
    .then((val)=>{
      this.information=val;
    }).catch((err)=>{
      console.log(err);
    });
  }
}

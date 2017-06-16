import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirstpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-firstpage',
  templateUrl: 'firstpage.html',
})
export class FirstpagePage {
  baba:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
  }

  ionViewDidLoad() {
    this.baba=this.navParams.get("baba");
    //alert(this.name)
    console.log('ionViewDidLoad FirstpagePage');
  }

}

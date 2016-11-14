import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MapViewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map-view-page',
  templateUrl: 'map-view-page.html'
})
export class MapViewPage {
  public location;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.location = navParams.get('location');
    }

  ionViewDidLoad() {
    console.log('Hello MapViewPage Page');
  }

}

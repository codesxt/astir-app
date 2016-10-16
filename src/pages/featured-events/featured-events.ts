import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FeaturedEvents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-featured-events',
  templateUrl: 'featured-events.html'
})
export class FeaturedEventsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FeaturedEvents Page');
  }

}

import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { MapViewPage } from '../map-view-page/map-view-page';

@Component({
  selector: 'page-event-detail-page',
  templateUrl: 'event-detail-page.html'
})
export class EventDetailPage {
  event;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.event = this.navParams.get('event');
  }

  viewInMap(){
    let location = [-31.127893, -43.718293];
    this.navCtrl.push(MapViewPage, {
      location: location
    });
  }
}

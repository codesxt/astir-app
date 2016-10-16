import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the EventDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-detail-page',
  templateUrl: 'event-detail-page.html'
})
export class EventDetailPage {
  event;

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.event = this.navParams.get('event');
  }

}

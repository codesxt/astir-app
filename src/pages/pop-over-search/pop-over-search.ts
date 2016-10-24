import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-pop-over-search',
  templateUrl: 'pop-over-search.html'
})
export class PopOverSearch {
  public searchText = "";
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) {

  }

  ionViewDidLoad() {
    console.log('Hello PopOverSearch Page');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}

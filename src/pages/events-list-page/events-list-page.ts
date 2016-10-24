import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { EventDetailPage } from '../event-detail-page/event-detail-page';
import { PopOverSearch } from '../pop-over-search/pop-over-search';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-events-list',
  templateUrl: 'events-list-page.html'
})
export class EventsListPage {
  public events = [];
  public filterVisible: boolean = false;
  public category: string = "";
  public categories = [
    {value: "any", name: "Todas"},
    {value: "music", name: "Música"},
    {value: "theatre", name: "Teatro"},
    {value: "exposition", name: "Exposición"},
    {value: "festival", name: "Festival"},
    {value: "fair", name: "Feria"},
    {value: "talk", name: "Charla"},
    {value: "movie", name: "Aire Libre"}
  ];

  public filter = {
    searchText: "",
    category: ""
  }

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public dataService: Data) {
      this.events = this.dataService.getData();
      this.filter.category = this.categories[0].value;
  }

  ionViewDidLoad(){
    //Called when page view is loaded (lifecycle function)
  }

  viewEvent(event){
    this.navCtrl.push(EventDetailPage, {
      event: event
    });
  }

  onSearchText(event){
    //console.log(this.filter.searchText);
  }

  togglePopover(event) {
    let popover = this.popoverCtrl.create(
      PopOverSearch,
      {},
      {
        showBackdrop: true
      }
    );
    popover.present({
      ev: event
    });
  }

  toggleFilter(event){
    this.filterVisible = !this.filterVisible;
  }
}

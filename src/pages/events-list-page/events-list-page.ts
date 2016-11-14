import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { EventDetailPage } from '../event-detail-page/event-detail-page';
import { PopOverSearch } from '../pop-over-search/pop-over-search';
import { Data } from '../../providers/data';

//Imports for web animations
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'page-events-list',
  templateUrl: 'events-list-page.html',
  changeDetection:ChangeDetectionStrategy.Default,
  animations: [
    trigger('slideIn', [
      state('in', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        display: 'block',
        visibility: 'visible',
      })),
      state('out', style({
        opacity: 0,
        transform: 'translate3d(0, -100%, 0)',
        display: 'none',
        visibility: 'hidden',
      })),
      transition('in <=> out', animate('400ms ease'))
    ]),
  ]
})
export class EventsListPage {
  events: any = [];
  public loadingEvents: boolean = false;
  public filterState: string = "out";
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
  public dateOptions = [
    {value: 'month', name: 'Este mes'},
    {value: 'week', name: 'Esta semana'},
    {value: 'today', name: 'Hoy'}
  ];

  public filter = {
    searchText: "",
    category: "",
    dateRange: "month"
  }

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public dataService: Data) {
      //this.events = this.dataService.getData();
      this.loadEvents();
      this.filter.category = this.categories[0].value;
  }

  ionViewDidLoad(){
    //Called when page view is loaded (lifecycle function)
  }

  loadEvents(){
    this.loadingEvents = true;
    this.dataService.load()
    .then(data => {
      this.events = data;
      this.loadingEvents = false;
    });
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
    this.filterState = (this.filterState == "in") ? "out" : "in";
  }
}

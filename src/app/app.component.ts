import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { EventsListPage } from '../pages/events-list-page/events-list-page';
import { FeaturedEventsPage } from '../pages/featured-events/featured-events';
import { InfoPage } from '../pages/info-page/info-page';
import { SettingsPage } from '../pages/settings-page/settings-page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = FeaturedEventsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();
    this.pages = [
      { title: 'Eventos Destacados', component: FeaturedEventsPage},
      { title: 'Lista de Eventos', component: EventsListPage},
      { title: 'Acerca de', component: InfoPage},
      { title: 'Configuraciones', component: SettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

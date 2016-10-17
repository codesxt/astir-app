import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';

import { EventsListPage } from '../pages/events-list-page/events-list-page';
import { EventDetailPage } from '../pages/event-detail-page/event-detail-page';
import { FeaturedEventsPage } from '../pages/featured-events/featured-events';
import { InfoPage } from '../pages/info-page/info-page';

@NgModule({
  declarations: [
    MyApp,
    EventsListPage,
    FeaturedEventsPage,
    EventDetailPage,
    InfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsListPage,
    FeaturedEventsPage,
    EventDetailPage,
    InfoPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}

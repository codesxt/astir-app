import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';

import { EventsListPage } from '../pages/events-list-page/events-list-page';
import { EventDetailPage } from '../pages/event-detail-page/event-detail-page';
import { FeaturedEventsPage } from '../pages/featured-events/featured-events';
import { InfoPage } from '../pages/info-page/info-page';
import { SettingsPage } from '../pages/settings-page/settings-page';
import { MapViewPage } from '../pages/map-view-page/map-view-page';
import { PopOverSearch } from '../pages/pop-over-search/pop-over-search';

import { EventsFilterPipe } from '../pipes/events-filter';
import { CategoryTranslatePipe } from '../pipes/category-translate';
import { TimeFormatPipe } from '../pipes/time-format';

@NgModule({
  declarations: [
    MyApp,
    EventsListPage,
    FeaturedEventsPage,
    EventDetailPage,
    InfoPage,
    SettingsPage,
    MapViewPage,
    PopOverSearch,
    EventsFilterPipe,
    CategoryTranslatePipe,
    TimeFormatPipe
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
    PopOverSearch,
    InfoPage,
    SettingsPage,
    MapViewPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}

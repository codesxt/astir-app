import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';

import { EventsListPage } from '../pages/events-list-page/events-list-page';
import { EventDetailPage } from '../pages/event-detail-page/event-detail-page';
import { FeaturedEventsPage } from '../pages/featured-events/featured-events';
import { InfoPage } from '../pages/info-page/info-page';
import { PopOverSearch } from '../pages/pop-over-search/pop-over-search';

import { EventsFilterPipe } from '../pipes/events-filter';
import { CategoryTranslatePipe } from '../pipes/category-translate';

@NgModule({
  declarations: [
    MyApp,
    EventsListPage,
    FeaturedEventsPage,
    EventDetailPage,
    InfoPage,
    PopOverSearch,
    EventsFilterPipe,
    CategoryTranslatePipe
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
    InfoPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventDetailPage } from '../pages/event-detail-page/event-detail-page';
import { FeaturedEventsPage } from '../pages/featured-events/featured-events';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeaturedEventsPage,
    EventDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeaturedEventsPage,
    EventDetailPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}

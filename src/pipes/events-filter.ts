import {Pipe} from '@angular/core';

import moment from 'moment/min/moment-with-locales.min';
moment.locale('es');

@Pipe({
  name: 'eventsFilter',
  pure: false
})
export class EventsFilterPipe {
  transform(events: any[], params: any) {
    let searchText = ((params[0] != "") ? params[0] : "");
    let category = ((params[1] != "") ? params[1] : "any");
    let dateRange = ((params[2] != "") ? params[2] : "any");
    if(searchText == null) { return events; }
    let query = searchText.toLowerCase();
    let now = moment();
    let daysThresh = 0;
    switch(dateRange){
      case 'today':{
        daysThresh = 1;
        break;
      }case 'week':{
        daysThresh = 7;
        break;
      }case 'month':{
        daysThresh = 31;
        break;
      }default:{
        daysThresh = 365;
        break;
      }
    }
    //console.log("DateRange:" + dateRange + ", daysThresh: " + daysThresh);
    return events.filter(event =>
        (event.title.toLowerCase().indexOf(query) > -1) &&
        (event.category == category || category == "any") &&
        (moment(event.when.start).diff(now, 'days', 'true') < daysThresh &&
         moment(event.when.start).diff(now, 'days', 'true') > -1)
    );
  }
}

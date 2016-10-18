import {Pipe} from '@angular/core';

@Pipe({
  name: 'eventsFilter',
  pure: false
})
export class EventsFilterPipe {
  transform(events: any[], params: string[]) {
    if(params[0] == null) { return events; }
    if(events == null) { return null; }
    let query = params[0].toLowerCase();
    return events.filter(event =>
        event.title.toLowerCase().indexOf(query) > -1
    );
  }
}

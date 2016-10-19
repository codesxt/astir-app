import {Pipe} from '@angular/core';

@Pipe({
  name: 'eventsFilter',
  pure: false
})
export class EventsFilterPipe {
  transform(events: any[], params: string) {
    if(params == null) { return events; }
    if(events == null) { return null; }
    let query = params.toLowerCase();
    return events.filter(event =>
        event.title.toLowerCase().indexOf(query) > -1
    );
  }
}

import {Pipe} from '@angular/core';

import moment from 'moment/min/moment-with-locales.min';
moment.locale('es');

@Pipe({
  name: 'timeFormat',
  pure: false
})
export class TimeFormatPipe {
  transform(date: string, mode: string) {
    if(mode==null){return date};
    switch(mode){
      case 'timeTo':{
        var temp = moment(date).fromNow();
        return temp[0].toUpperCase() + temp.slice(1);
      }case 'normal':{
        return moment(date).format('LLL');
      }default:{
        return date;
      }
    }
    //console.log("Locale:" + moment.locale());
    //console.log("Probando Moment: " + moment('1991-11-17').fromNow());

  }
}

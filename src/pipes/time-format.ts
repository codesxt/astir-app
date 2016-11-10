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
    var temp = "";
    switch(mode){
      case 'timeTo':{
        temp = moment(date).fromNow();
        return temp[0].toUpperCase() + temp.slice(1);
      }case 'normal':{
        return moment(date).format('LLL');
      }case 'onlyDay':{
        return moment(date).format('DD');
      }case 'onlyMonthShort':{
        temp = moment(date).format('MMM');
        temp = temp[0].toUpperCase() + temp.slice(1,3);
        return temp;
      }default:{
        return date;
      }
    }
    //console.log("Locale:" + moment.locale());
    //console.log("Probando Moment: " + moment('1991-11-17').fromNow());

  }
}

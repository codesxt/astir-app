import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }

  getData(){
    //return this.storage.get('todos');
    return [{
      "id": 1,
      "title": "Concierto de Temporada N° 8",
      "category": "Música",
      "description": "Una pequeña descripción.",
      "when":{
        "start": "N de Octubre",
        "finish": "M de Octubre"
      },
      "where": "Dirección o lugar del evento",
      "cost": [{
        "text": "Adulto",
        "value": 4000
      },{
        "text": "Estudiante",
        "value": 2000
      }]
    },{
      "id": 2,
      "title": "La Remolienda",
      "category": "Teatro",
      "description": "Un evento sabrozongo",
      "when":{
        "start": "X de Noviembre"
      },
      "where": "Dirección o lugar del evento"
    },{
      "id": 3,
      "title": "Evento 3",
      "category": "Festival",
      "description": "Uff... ¡pero qué evento!",
      "where": "Dirección o lugar del evento"
    }];
  }

  save(data){
    //Do something with Data
    console.log('Data Provider Save.');
  }
}

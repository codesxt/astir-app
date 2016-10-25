import {Pipe} from '@angular/core';

@Pipe({
  name: 'categoryTranslate',
  pure: false
})
export class CategoryTranslatePipe {
  transform(category: string) {
    switch(category){
      case "music":
        return "Música";
      case "theatre":
        return "Teatro";
      case "exposition":
        return "Exposición";
      case "festival":
        return "Festival";
      case "fair":
        return "Feria";
      case "talk":
        return "Charla";
      case "movie":
        return "Película";
      case "outdoor":
        return "Aire Libre";
      default:
        return "Sin categoría";
    }
  }
}

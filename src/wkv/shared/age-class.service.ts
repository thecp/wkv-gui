import { Injectable } from '@angular/core';

interface AgeClass {
  id: string;
  name: string;
}

@Injectable()
export class AgeClassService {

  // TODO real age classes
  // 1. provide here or
  // 2. query from API -> bootstrap on startup
  // 3. provide json file
  ageClasses: AgeClass[] = [
    {
      id: 'M',
      name: 'Männer'
    }
  ];

  get(): AgeClass[] {
    return this.ageClasses;
  }

  findById(id: string): AgeClass {
    let filter: AgeClass[] = this.ageClasses.filter(item => item.id === id);
    return filter.length ? filter[0] : null;
  }
}

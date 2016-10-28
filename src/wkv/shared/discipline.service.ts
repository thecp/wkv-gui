import { Injectable } from '@angular/core';

interface Discipline {
  id: string;
  name: string;
  short: string;
}

@Injectable()
export class DisciplineService {

  // TODO real disciplines
  // 1. provide here or
  // 2. query from API -> bootstrap on startup
  // 3. provide json file
  disciplines: Discipline[] = [
    {
      id: '100m',
      name: '100 m',
      short: '100m'
    },
    {
      id: 'LongJump',
      name: 'Weitsprung',
      short: 'Weitsprung'
    }
  ];

  get(): Discipline[] {
    return this.disciplines;
  }

  findById(id: string): Discipline {
    let filter: any[] = this.disciplines.filter(item => item.id === id);
    return filter.length ? filter[0] : null;
  }
}

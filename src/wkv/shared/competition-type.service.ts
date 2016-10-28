import { Injectable } from '@angular/core';

@Injectable()
export class CompetitionTypeService {

  // TODO remove all any's
  // TODO real types
  competitionTypes: any[] = [
    {
      id: 'FINAL',
      name: 'Finale'
    }
  ];

  // TODO make it a Observable
  // TODO return for discipline (Lauf / Technisch/ Mehrkampf -> fetch disciplines from Server)
  get(discipline?: any): any[] {
    return this.competitionTypes;
  }

  findById(id: string): any {
    let filter: any[] = this.competitionTypes.filter(item => item.id === id);
    return filter.length ? filter[0] : null;
  }
}

import { Injectable } from '@angular/core';

import { RegionalAssociation } from './regional-association.interface';

@Injectable()
export class RegionalAssociationService {
  private mockRegionalAssociations: RegionalAssociation[] = [
    {name: 'Sachsen', short: 'SN'},
    {name: 'Sachsen-Anhalt', short: 'ST'},
    {name: 'Thüringen', short: 'TH'},
  ];

  getRegionalAssociations(): Promise<RegionalAssociation[]> {
    return Promise.resolve(this.mockRegionalAssociations);
  }
}

import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { RegionalAssociationService } from '../shared/regional-association.service';
import { RegionalAssociation } from '../shared/regional-association.interface';
import { Club } from './club.interface';

@Component({
  selector: 'club-form',
  templateUrl: 'club-form.component.html',
  providers: [RegionalAssociationService]
})
export class ClubFormComponent {

  regionalAssociations: RegionalAssociation[];

  @Input() clubForm: FormGroup;
  @Output() updateClub = new EventEmitter<Club>();

  constructor(private regionalAssociationService: RegionalAssociationService) {}

  ngOnInit() {
    this.regionalAssociationService.getRegionalAssociations().then(
      result => this.regionalAssociations = result
    );
  }

  submit(club: Club) {
    this.updateClub.emit(club);
  }
}

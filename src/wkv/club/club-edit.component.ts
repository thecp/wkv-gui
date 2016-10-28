import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { RegionalAssociation } from '../shared/regional-association.interface';
import { Club } from './club.interface';
import { ClubResource } from '../shared/resources/club.resource';

@Component({
  selector: 'club-edit',
  templateUrl: 'club-edit.component.html',
  providers: [ClubResource]
})
export class ClubEditComponent {

  public club: Club;

  // TODO Validation
  clubForm = new FormGroup({
    id: new FormControl(),
    regionalAssociation: new FormControl(),
    number: new FormControl(),
    name: new FormControl()
  });

  constructor(private clubResource: ClubResource,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.clubResource.get(params['id']).subscribe(this.updateForm.bind(this));
      }
    });
  }

  updateForm(club: Club) {
    this.club = club;
    this.clubForm.patchValue(this.club);
  }

  save(club: Club) {
    // TODO Object.assgn to make use id not in Form?
    this.clubResource.save(club).subscribe(this.updateForm.bind(this));
  }
}

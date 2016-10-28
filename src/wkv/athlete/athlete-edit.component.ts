import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { RegionalAssociation } from '../shared/regional-association.interface';
import { Athlete } from './athlete.interface';
import { AthleteResource } from '../shared/resources/athlete.resource';

@Component({
  selector: 'athlete-edit',
  templateUrl: 'athlete-edit.component.html',
  providers: [AthleteResource]
})
export class AthleteEditComponent {

  public athlete: Athlete;

  // TODO Validation
  athleteForm = new FormGroup({
    id: new FormControl(),
    stno: new FormControl(),
    surname: new FormControl(),
    forename: new FormControl(),
    clubId: new FormControl(),
    year: new FormControl(),
    gender: new FormControl()
  });

  constructor(private athleteResource: AthleteResource,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.athleteResource.get(params['id']).subscribe(this.updateForm.bind(this));
      }
    });
  }

  updateForm(athlete: Athlete) {
    this.athlete = athlete;
    this.athleteForm.patchValue(this.athlete);
  }

  save(athlete: Athlete) {
    // TODO Object.assgn to make use id not in Form?
   this.athleteResource.save(athlete).subscribe(this.updateForm.bind(this));
  }
}

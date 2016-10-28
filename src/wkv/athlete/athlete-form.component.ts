import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { ClubResource } from '../shared/resources/club.resource';
import { Club } from '../club/club.interface';
import { Athlete } from './athlete.interface';

@Component({
  selector: 'athlete-form',
  templateUrl: 'athlete-form.component.html',
  providers: [ClubResource]
})
export class AthleteFormComponent {

  clubs: Club[];

  @Input() athleteForm: FormGroup;
  @Output() updateAthlete: EventEmitter<Athlete> = new EventEmitter<Athlete>();

  constructor(private clubResource: ClubResource) {}

  ngOnInit() {
    this.clubResource.query().subscribe(
      result => this.clubs = result
    );
  }

  submit(athlete: Athlete) {
    this.updateAthlete.emit(athlete);
  }
}

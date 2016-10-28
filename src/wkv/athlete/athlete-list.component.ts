import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AthleteResource } from '../shared/resources/athlete.resource';
import { Athlete } from './athlete.interface';

@Component({
  selector: 'athlete-list',
  templateUrl: 'athlete-list.component.html',
  providers: [AthleteResource]
})
export class AthleteListComponent implements OnInit {
  athletes: Athlete[];

  constructor(private athleteResource: AthleteResource,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.athleteResource.query().subscribe(result => this.athletes = result);
  }

  edit(athlete) {
    this.router.navigate(['./edit/' + athlete.id], { relativeTo: this.route });
  }

  delete(athlete) {

  }
}

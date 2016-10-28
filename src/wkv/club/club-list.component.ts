import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClubResource } from '../shared/resources/club.resource';
import { Club } from './club.interface';

@Component({
  selector: 'club-list',
  templateUrl: 'club-list.component.html',
  providers: [ClubResource]
})
export class ClubListComponent implements OnInit {
  clubs: Club[];

  constructor(private clubResource: ClubResource,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.clubResource.query().subscribe(result => this.clubs = result);
  }

  edit(club) {
    this.router.navigate(['./edit/' + club.id], { relativeTo: this.route });
  }

  delete(club) {

  }
}

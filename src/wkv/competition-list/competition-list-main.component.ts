import { Component, OnInit } from '@angular/core';

import { CompetitionList } from './competition-list.class';
import { Athlete } from '../athlete/athlete.interface';
import { Club } from '../club/club.interface';
import { AthleteResource } from '../shared/resources/athlete.resource';
import { ClubResource } from '../shared/resources/club.resource';
import { CompetitionListResource } from '../shared/resources/competition-list.resource';

@Component({
  selector: 'competition-list',
  templateUrl: './competition-list-main.component.html',
  providers: [AthleteResource, ClubResource, CompetitionListResource]
})
export class CompetitionListMainComponent implements OnInit {

  mixedCompetition: string[] = [];
  athletes: Athlete[] = [];
  availableAthletes: Athlete[] = [];
  clubs: Club[] = [];
  competitionList = null;/*[ // TODO fetch from server
    {
      group: 1,
      participants: [
        {athleteId: 1, position: 1},
        {athleteId: 2, position: 2},
        {athleteId: 'f', position: 3},
      ]
    },
    {
      group: 2,
      participants: [
        {athleteId: 3, position: 1},
        {athleteId: 4, position: 2},
        {athleteId: 'f', position: 3},
      ]
    }
  ];*/

  constructor(private athleteResource: AthleteResource,
              private clubResource: ClubResource,
              private competitionListResource: CompetitionListResource) {}

  ngOnInit() {
    /*this.clubResource.query().subscribe(result => this.clubs = result);
    this.athleteResource.query().subscribe(result => {
      this.athletes = result;
      this.athletes.forEach(athlete => this.availableAthletes.push(athlete));
    });*/
  }

  ngOnChanges() {

  }

  initCompetitionList(selected: {competitionId: number, competitionType: string, group?: number}) {
    this.competitionListResource.find(
      selected.competitionId,
      selected.competitionType
    ).subscribe(result => this.competitionList = result);
  }

  resetCompetitionList() {
    this.athletes = [];
    this.competitionList = null;
  }

  save() {
    this.competitionListResource.save(this.competitionList);
  }
}

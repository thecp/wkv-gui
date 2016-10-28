import { Component, OnInit } from '@angular/core';

import { Competition } from './competition.interface';
import { CompetitionResource } from '../shared/resources/competition.resource';
import { DisciplineService } from '../shared/discipline.service';
import { AgeClassService } from '../shared/age-class.service';

@Component({
  selector: 'competition-list',
  templateUrl: './competition-list.component.html',
  providers: [CompetitionResource, AgeClassService, DisciplineService]
})
export class CompetitionListComponent implements OnInit {
  competitions: Competition[];
  ageClasses: any[];
  disciplines: any[];

  constructor(private competitionResource: CompetitionResource,
              private ageClassService: AgeClassService,
              private disciplineService: DisciplineService) {}

  ngOnInit() {
    this.disciplines = this.disciplineService.get();
    this.ageClasses = this.ageClassService.get();
    this.competitionResource.query().subscribe(result => this.competitions = result);
  }

  save() {
    // TODO doesn't send request
    this.competitionResource.save(this.competitions);
  }

  addCompetitions(addedCompetitions: Competition[]) {
    let competitions = this.competitions;
    addedCompetitions.forEach(function(competition) {
      if (competitions.filter(f => {
        return f.ageClass === competition.ageClass && f.discipline === competition.discipline;
      }).length === 0) {
        competitions.push(competition);
      }
    });
  }
}

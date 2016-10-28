import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DisciplineService } from '../shared/discipline.service';
import { AgeClassService } from '../shared/age-class.service';
import { CompetitionTypeService } from '../shared/competition-type.service';
import { CompetitionResource } from '../shared/resources/competition.resource';

@Component({
  selector: 'competition-list-selector',
  templateUrl: './competition-list-selector.component.html',
  providers: [AgeClassService, DisciplineService, CompetitionTypeService, CompetitionResource]
})
export class CompetitionListSelectorComponent implements OnInit {
  // TODO remove all any's
  // TODO type events
  // TODO check if it's expected or not that input[type="number"] 
  // and select values are always strings or not

  @Output() onSelection: EventEmitter<any> = new EventEmitter<any>();
  @Output() onReset: EventEmitter<any> = new EventEmitter<any>();

  availableAgeClasses: any[] = [];
  availableCompetitions: any[] = [];
  selectableCompetitions: any[] = [];
  competitionTypeOptions: any[] = [];

  competitionNr: number = null;
  ageClass: string = 'all';
  competitionId: number | string = 'none';
  competitionType: string = 'none';

  constructor(private competitionResource: CompetitionResource,
              private ageClassService: AgeClassService,
              private disciplineService: DisciplineService,
              private competitionTypeService: CompetitionTypeService) {}

  ngOnInit() {
    this.competitionResource.query().subscribe(result => {
      this.availableCompetitions = result;
      this.selectableCompetitions = result;
      this.setAgeClasses();
      this.setCompetitionTypeOptions(); // TODO do on competition change and not here!
    });
  }

  findCompetitionByNr(value: string) {
    this.competitionNr = Number(value);
    let filter = this.availableCompetitions.filter(comp => comp.number === this.competitionNr);
    if (filter.length !== 0) {
      this.competitionId = filter[0].id;
      this.ageClass = filter[0].ageClass;
    } else {
      this.competitionNr = null;
    }
    this.resetCompetitionType();
  }

  triggerFindCompetitionByNr(event, value: string) {
    if ((event.keyCode || event.charCode) === 13) {
      this.findCompetitionByNr(value);
    }
  }

  changeAgeClass(value: string) {
    this.ageClass = value;
  }

  changeCompetition(value: string) {
    if (value !== 'none') {
      this.competitionId = Number(value);
      let filter = this.availableCompetitions.filter(comp => comp.id === this.competitionId);
      this.competitionNr = filter[0].number;
    } else {
      this.competitionId = value;
    }
    this.resetCompetitionType();
  }

  changeCompetitionType(value: string) {
    this.competitionType = value;
    this.triggerUpdate();
  }

  private triggerUpdate() {
    if (this.competitionType !== undefined && this.competitionType !== 'none' &&
        this.competitionId !== undefined && this.competitionId !== 'none') {
      this.onSelection.emit({
        competitionId: this.competitionId,
        competitionType: this.competitionType
      });
    }
  }

  // TODO sort age classes (API or here)
  private setAgeClasses() {
    let ageClasses: string[] = [];
    this.availableCompetitions.forEach(competition => {
      if (ageClasses.indexOf(competition.ageClass) === -1) {
        ageClasses.push(competition.ageClass);
      }
    });
    ageClasses.forEach(ageClass => {
      let a = this.ageClassService.findById(ageClass);
      if (a !== null) {
        this.availableAgeClasses.push(a);
      } else {
        // console.error(a + ' not known by age class service');
      }
    });
  }

  private setCompetitionTypeOptions() {
    this.competitionTypeOptions = this.competitionTypeService.get();
  }

  private resetCompetitionType() {
    this.competitionType = 'none';
  }
}

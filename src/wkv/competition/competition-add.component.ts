import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { DisciplineService } from '../shared/discipline.service';
import { AgeClassService } from '../shared/age-class.service';

@Component({
  selector: 'competition-add',
  templateUrl: './competition-add.component.html',
  providers: [AgeClassService, DisciplineService]
})
export class CompetitionAddComponent implements OnInit {
  @Output() onAdd: EventEmitter<any[]> = new EventEmitter<any[]>();
  ageClasses: any[];
  disciplines: any[];
  addCompetitionForm: FormGroup;

  constructor(private ageClassService: AgeClassService,
              private disciplineService: DisciplineService,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.disciplines = this.disciplineService.get();
    this.ageClasses = this.ageClassService.get();
  }

  submit() {
    let competitions = [];
    this.addCompetitionForm.value.disciplines.forEach(discipline => {
      this.addCompetitionForm.value.ageClasses.forEach(ageClass => {
        competitions.push({ageClass: ageClass, discipline: discipline});
      });
    });
    this.onAdd.emit(competitions);
    this.createForm();
  }

  private createForm() {
    this.addCompetitionForm = this.fb.group({
      ageClasses: [[]],
      disciplines: [[]]
    });
  }
}

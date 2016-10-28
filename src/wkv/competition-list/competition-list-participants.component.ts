import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'competition-list-participants',
  templateUrl: './competition-list-participants.component.html'
})
export class CompetitionListParticipantsComponent {

  @Input() athletes: any[];

  constructor() {

  }

  select(athlete) {
    athlete.selected = !athlete.selected;
  }
}

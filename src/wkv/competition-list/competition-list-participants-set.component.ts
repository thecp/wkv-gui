import { Component, Input } from '@angular/core';

interface Participant {
  id: number; // Athlete ID
  position: number; // Position in Heat or Group
  position800m?: number;  // Second Position order if position is equal
}

@Component({
  selector: '[participantRow]',
  template: `<td><input type="checkbox" [value]="participant.selected"></td>
            <td>{{participant.position}}</td>
            <td>{{athlete.stno}}</td>
            <td>{{athlete.forename}} {{athlete.surname}}</td>
            <td></td>`
})
export class ParticipantRow {
  @Input('participantRow') participant;
  @Input() athletes;

  athlete = {};

  ngOnChanges() {
    if (this.athletes !== undefined) {
      this.athlete = this.athletes.filter(f => this.participant.id === f.id)[0] || {};
    }
  }
}

@Component({
  selector: 'competition-list-participants-set',
  templateUrl: './competition-list-participants-set.component.html'
})
export class CompetitionListParticipantsSetComponent {

  options: {};  // Input

  @Input() athletes;
  @Input() list;

  listHeaders = ['Bahn', 'St.-Nr.', 'Name', 'Verein'];

  constructor() {}

  select(participant) {
    participant.selected = !participant.selected;
  }
}

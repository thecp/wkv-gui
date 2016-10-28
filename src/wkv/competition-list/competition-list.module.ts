import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CompetitionListMainComponent } from './competition-list-main.component';
import { CompetitionListSelectorComponent } from './competition-list-selector.component';
import { CompetitionListParticipantsComponent } from './competition-list-participants.component';
import {
  CompetitionListParticipantsSetComponent, ParticipantRow
} from './competition-list-participants-set.component';
import { routing } from './competition-list.routing.ts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule, // Need Pipes here
    routing
  ],
  declarations: [
    CompetitionListMainComponent,
    CompetitionListSelectorComponent,
    CompetitionListParticipantsComponent,
    CompetitionListParticipantsSetComponent,
    ParticipantRow
  ],
  providers: []
})
export default class CompetitionListModule {}

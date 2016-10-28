import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompetitionListComponent } from './competition-list.component';
import { CompetitionAddComponent } from './competition-add.component';
import { routing } from './competition.routing.ts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    CompetitionListComponent,
    CompetitionAddComponent
  ],
  providers: []
})
export default class CompetitionListModule {}

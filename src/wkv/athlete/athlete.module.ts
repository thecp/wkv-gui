import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AthleteListComponent } from './athlete-list.component';
import { AthleteEditComponent } from './athlete-edit.component';
import { AthleteFormComponent } from './athlete-form.component';
import { routing } from './athlete.routing.ts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AthleteListComponent,
    AthleteEditComponent,
    AthleteFormComponent
  ],
  providers: []
})
export default class CompetitionListModule {}

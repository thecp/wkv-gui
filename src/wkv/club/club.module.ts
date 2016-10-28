import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClubListComponent } from './club-list.component';
import { ClubEditComponent } from './club-edit.component';
import { ClubFormComponent } from './club-form.component';
import { routing } from './club.routing.ts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    ClubListComponent,
    ClubEditComponent,
    ClubFormComponent
  ],
  providers: []
})
export default class CompetitionListModule {}

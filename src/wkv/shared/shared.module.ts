import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AgeClassPipe,
  DisciplinePipe,
  CompetitionPipe
} from './pipes';
// TODO export more stuff to make it available in lazy loaded modules or drop lazy loading

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AgeClassPipe, DisciplinePipe, CompetitionPipe ],
  exports:      [ AgeClassPipe, DisciplinePipe, CompetitionPipe ]
})
export class SharedModule {}

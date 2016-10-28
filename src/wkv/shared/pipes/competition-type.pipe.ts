import { Pipe, PipeTransform } from '@angular/core';
import { CompetitionTypeService } from '../competition-type.service';

@Pipe({name: 'competitionType'})
export class CompetitionPipe implements PipeTransform {

  constructor(private competitionTypeService: CompetitionTypeService) {}

  transform(value: string): string {
    let type = this.competitionTypeService.findById(value);
    return type ? type.name : value;
  }
}

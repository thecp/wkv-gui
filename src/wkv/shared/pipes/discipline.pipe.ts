import { Pipe, PipeTransform } from '@angular/core';
import { DisciplineService } from '../discipline.service';

@Pipe({name: 'discipline'})
export class DisciplinePipe implements PipeTransform {

  constructor(private disciplineService: DisciplineService) {}

  transform(value: string): string {
    let discipline = this.disciplineService.findById(value);
    return discipline ? discipline.name : value;
  }
}

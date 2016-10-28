import { Pipe, PipeTransform } from '@angular/core';
import { AgeClassService } from '../age-class.service';

@Pipe({name: 'ageClass'})
export class AgeClassPipe implements PipeTransform {

  constructor(private ageClassService: AgeClassService) {}

  transform(value: string): string {
    let ageClass = this.ageClassService.findById(value);
    return ageClass ? ageClass.name : value;
  }
}

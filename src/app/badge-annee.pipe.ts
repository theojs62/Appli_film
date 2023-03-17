import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import { DateFunctionsService } from './services/date-functions.service';


@Pipe({
  name: 'badgeAnnee'
})
export class BadgeAnneePipe implements PipeTransform {

  constructor(private dateFunctions: DateFunctionsService) {}

  transform(value: number): string {
    const date = this.dateFunctions.new(`${value}-01-01`, 'YYYY-MM-DD');
    const now = dayjs();
    const years = now.diff(date, 'year');

    if (years < 1) {
      return '-1';
    } else if (years < 5) {
      return '-5';
    } else {
      return '+5';
    }
  }

}

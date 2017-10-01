import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      // date format : ISODate("2017-09-30T19:59:44.276Z")
      if ( value.indexOf('-') > -1 ) {
          let date, fullTime;
          [date, fullTime] = value.toLowerCase().split('t');

          let year, month, day;
          [year, month, day] = date.split('-');

          let time, rest;
          [time, rest] = fullTime.split('.');

          return `${day}/${month}/${year} - ${time}`;
      } else {
          return '00/00/00 - 00:00:00';
      }
  }

}

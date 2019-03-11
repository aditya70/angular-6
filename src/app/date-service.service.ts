import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {
  dateService = "date service property";
  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }
}

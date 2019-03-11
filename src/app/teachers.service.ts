import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() { }

  getAllTeacher()
  {
    return ["Mp singh","Dk singh","Rk singh"];
  }
}

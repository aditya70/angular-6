import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  title = "list of teachers";
  teachers;
  constructor(teacherService : TeachersService){
    this.teachers = teacherService.getAllTeacher();
   }

  ngOnInit() {
  }

}

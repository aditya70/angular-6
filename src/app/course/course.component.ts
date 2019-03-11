import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   title="list of courses";
   courses = ["math","physics","chemistry","biology"]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    title = "list of users"
    users = ["ram","mohan","shyam"]
  constructor() { }

  ngOnInit() {
  }

}

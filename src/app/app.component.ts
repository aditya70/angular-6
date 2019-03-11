import { Component,OnInit } from '@angular/core';
import {Location} from '@angular/common'
// import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http'
import { map} from 'rxjs/operators';

import {DateServiceService} from './date-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'Angular  Project!';
   //array of months.
   months = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
   isavailable = false;
   todaydate;
   componentproperty;
   httpdata;
   allowNewServer = true;
   serverName = '';   

  constructor(private location : Location,
    private dateservice : DateServiceService,
    private http : HttpClient){}

  ngOnInit(): void {
  //  this.todaydate = this.dateservice.showTodayDate();
  //  this.componentproperty = this.dateservice.dateService;
  // this.http.get("http://jsonplaceholder.typicode.com/users").
  // subscribe((data) ⇒ console.log(data))

  }

  displaydata(data) {this.httpdata = data;}

  OnUpdateServerName(event: Event) {  
     
   this.serverName = (<HTMLInputElement>event.target).value;
  }  

  myClickFunction(event) {
    alert("Button is clicked");
    console.log(event);
 }
 changemonths(event1) {
  console.log("Changed month from the Dropdown");
  alert("Changed month from the Dropdown");
  console.log(event1);
}
  goBack(): void {
    this.location.back();
  }

}

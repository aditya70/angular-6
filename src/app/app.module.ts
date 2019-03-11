import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
//import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { UserComponent } from './user/user.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersService } from './teachers.service';
import { DateServiceService } from './date-service.service';
import { httpFactory } from '@angular/http/src/http_module';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    UserComponent,
    TeacherComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path: 'login', component: LoginComponent },
        { path: 'add-user', component: AddUserComponent },
        { path: 'list-user', component: ListUserComponent },
        { path: 'edit-user', component: EditUserComponent },
        {path : '', component : LoginComponent},
        {
          path: 'user',
          component: UserComponent
       },
       {
        path: 'course',
        component: CourseComponent
       },
       {
        path: '**',
        component: TeacherComponent
       }
      ]
    )
  ],
  providers: [TeachersService,
    DateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

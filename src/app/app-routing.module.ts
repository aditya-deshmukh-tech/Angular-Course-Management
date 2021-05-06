import { NgModule, Component, OnInit } from '@angular/core';
import { Routes, RouterModule, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterState } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'courses', component:CourseListComponent, canActivate: [AuthGuard]},
  {path:'signup', component:SignupComponent},
  {path:'editcourse/:eid' , component: CourseEditComponent},
  {path:'coursedetails/:id', component: CourseDetailsComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 
 

 }

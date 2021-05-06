import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Routes } from '@angular/router';
import { FbcoursesService } from 'src/app/firebase/fbcourses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  courses;
  errorMessege;
  constructor( private dbservice: FbcoursesService) { }

  ngOnInit() {
    this.getCourses();
   
  }

  onStarClicked(event){
    alert(event);
  }

  getCourses(){
    //this.courseService.getCourse()
      //  .subscribe(responce =>{
        //  this.courses=responce;
          //this.load = false;
        //},
        //error => this.errorMessege=error.message
        //);
        
        this.dbservice.getCourse()
        .subscribe(
          responce => {
            let courseData = [];
            responce.forEach(item => {
              const course1: any = item.payload.val();
              course1.courseId = item.payload.key;
              courseData.push(course1);
            });
            this.courses = courseData;
          },
          error => this.errorMessege = error.message
          );
        
     }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbcoursesService } from 'src/app/firebase/fbcourses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId;
  course;
  showMore= false;
  constructor(private route: ActivatedRoute, private dbservice: FbcoursesService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(responce =>{
      this.courseId = responce.get('id');
      this.getCourse(this.courseId);
    },error => console.log(error)
    );
  }

  getCourse(id){
    this.dbservice.getOnlyCourse(id)
    .subscribe(responce => {
      this.course = responce.payload.val();
      this.course.courseId = responce.payload.key;
    },error => console.log(error));
  }

  deleteCourse(){
    const action = confirm('do you really want to delete course');

    if(action){
      this.dbservice.deleteCourse(this.courseId)
            .then(responce =>{
                alert("course deleted succesfully");
                this.router.navigate(['/courses']);
            },error => console.log(error));
    }
  }

  showMoreText(){
    this.showMore = !this.showMore;
  }

}

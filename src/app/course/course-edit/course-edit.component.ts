import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbcoursesService } from 'src/app/firebase/fbcourses.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  isNewCourse= false;
  courseForm;
  courseId;
  course;
  headerValue;
  constructor(private route: ActivatedRoute, private dbservice: FbcoursesService,
    private form: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(responce =>{
      this.courseId = responce.get('eid');
      if(this.courseId === 'new'){
          this.isNewCourse = true;
          this.headerValue="Add new Coures"
      }
      else{
        this.isNewCourse=false;
        this.headerValue="Update course"
        this.getCourse(this.courseId);
      }
      
    },error => console.log(error)
    );
    this.createForm();
  }

  createForm(){
    this.courseForm = this.form.group({
      courseCode :'',
      courseId: '',
      courseName :'',
      description :'',
      imageUrl :'',
      nextBatchDate:'',
      price :'',
      starRating:'',
      trainer :''
    });
  }

  setFormFields() {
    this.courseForm.patchValue({
      courseCode: this.course.courseCode,
      courseId: this.course.courseId,
      courseName: this.course.courseName,
      description: this.course.description,
      nextBatchDate: this.course.nextBatchDate,
      price: this.course.price,
      starRating: this.course.starRating,
      trainer: this.course.trainer,
      imageUrl:this.course.imageUrl,
    });
  }


  getCourse(id){
    this.dbservice.getOnlyCourse(id)
    .subscribe(responce => {
      this.course = responce.payload.val();
      this.course.courseId = responce.payload.key;
      this.setFormFields();
    },error => console.log(error));
  }

  submitCourse(){
    if(this.isNewCourse){
      this.addCourse();
    }
    else{
      this.updateCourse();
    }

  }

  updateCourse(){
    this.dbservice.updateCourse(this.courseId,this.courseForm.value)
        .then(responce => {
          alert("course updated succesfull");
          this.router.navigate(['/coursedetails',this.courseId]);
        }, error => {
          console.log(error);
          alert("not updated");
        }
        );
  }

  addCourse(){
    this.dbservice.addCourse(this.courseForm.value)
        .then(
          responce => {alert("added succesfully");
        this.router.navigate(['/courses']);},
          error => console.log(error)
          
          
        );
  }

}

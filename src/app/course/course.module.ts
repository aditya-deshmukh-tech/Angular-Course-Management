import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { StarComponent } from '../star/star.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RouterModule } from '@angular/router';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './pipe/summary.pipe';



@NgModule({
  declarations: [CourseListComponent,
  StarComponent,
  CourseDetailsComponent,
  CourseEditComponent,
  SummaryPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CourseListComponent
  ]
})
export class CourseModule { }

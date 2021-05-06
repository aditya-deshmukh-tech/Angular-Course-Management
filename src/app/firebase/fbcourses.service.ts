import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FbcoursesService {

  constructor(private db: AngularFireDatabase) { }


  getCourse(){
      return this.db.list('/courses').snapshotChanges();
  }

  getOnlyCourse(id){
    return this.db.object(`/courses/${id}`).snapshotChanges();
  }

  updateCourse(courseId, course){
    return this.db.object(`/courses/${courseId}`).update(course);
  }

  deleteCourse(courseId){
      return this.db.object(`/courses/${courseId}`).remove();
  }

  addCourse(course){
      return this.db.list('/courses').push(course);
  }

}

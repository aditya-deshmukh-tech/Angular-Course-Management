import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';
import { StarComponent } from 'src/app/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseModule } from 'src/app/firebase/firebase/firebase.module';
import { FbcoursesService } from 'src/app/firebase/fbcourses.service';
import { AngularFireAction } from 'angularfire2/database';
import { of, throwError } from 'rxjs';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let service: FbcoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, StarComponent ],
      imports:[RouterModule,
        HttpClientModule,
        FirebaseModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(FbcoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onStarClicked',() =>{
    component.onStarClicked('hello');
  });

  it('should get courses',() =>{
    const responseObject: AngularFireAction<any>  = {
      payload: {
        val: () => {
          return [
            {
              courseCode : "ZIDOX-00",
              courseId : 0,
              courseName : "Angular 9",
              description : "Irure labore magna nostrud dolor aliqua exercitation non est amet tempor anim irure sit amet. Occaecat deserunt ex officia elit quis commodo commodo excepteur laborum sint. Elit ullamco consectetur ullamco laborum ut et. Culpa sunt ex anim ad.\r\n",
              imageUrl : "https://angular.io/assets/images/logos/angular/angular.png",
              nextBatchDate : "08-03-2020",
              price : 4679.76,
              starRating : 3.6,
              trainer : "Ellis Hester"
            }
          ]
        }
      },
      prevKey: '',
      key: '',
      type: null
    };

    spyOn(service,'getCourse').and.returnValue(of([responseObject]));
    component.ngOnInit();
    expect(component.courses.length).toBe(1);
  });

  it('return error ',()=>{
    spyOn(service,'getCourse').and.returnValue(throwError('error'));
    component.getCourses();
    expect(component.courses).toBeUndefined();
  });
});

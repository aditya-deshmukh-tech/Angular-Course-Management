import { TestBed } from '@angular/core/testing';

import { FbcoursesService } from './fbcourses.service';
import { FirebaseModule } from './firebase/firebase.module';

describe('FbcoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      FirebaseModule
    ]
  }));

  it('should be created', () => {
    const service: FbcoursesService = TestBed.get(FbcoursesService);
    expect(service).toBeTruthy();
  });

  it('should call all methods', ()=>{
    const service: FbcoursesService = TestBed.get(FbcoursesService);
    service.getCourse();
    service.getOnlyCourse('101');
    service.addCourse({});
    service.updateCourse('101',{});
    service.deleteCourse('101');

  });

});

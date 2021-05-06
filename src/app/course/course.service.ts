import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = 'https://raw.githubusercontent.com/Swadreams/Angular-Feb-2020/Data/data.json';
  constructor( private http: HttpClient) { }

  getCourse(){
    return this.http.get(this.url);
  }
}

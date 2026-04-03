import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../entity/student';

@Injectable({
  providedIn: 'root',
})

export class StudentService {
  private api : string = "http://localhost:8080/prueba"

  constructor(private http:HttpClient){
  }

  listStudents():Observable<Student []>{
    return this.http.get<Student []>(this.api);
  }

  createStudent(student : Student):Observable<Student>{
    return this.http.post<Student>(this.api,student);
  }

}

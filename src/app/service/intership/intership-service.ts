import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntershipDetail } from '../../entity/internshipDetails';
import { Intership } from '../../entity/intership';


@Injectable({ providedIn: 'root' })
export class IntershipService {
  private api = 'http://localhost:8080/internship/probate';

  constructor(private http: HttpClient) {}

  listInterships(): Observable<IntershipDetail[]> {
    return this.http.get<IntershipDetail[]>(`${this.api}`);
  }
  postInternships(internship : Intership){
    return this.http.post<Intership>(this.api, internship);
  }
}
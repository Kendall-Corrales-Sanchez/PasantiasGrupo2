import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntershipDetail } from '../../entity/internshipDetails';


@Injectable({ providedIn: 'root' })
export class IntershipService {
  private base = 'http://localhost:8080/internship/probate';

  constructor(private http: HttpClient) {}

  getAllInterships(): Observable<IntershipDetail[]> {
    return this.http.get<IntershipDetail[]>(`${this.base}`);
  }
}
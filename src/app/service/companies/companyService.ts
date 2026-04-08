import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Companies } from '../../entity/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class companyService {

  private api = "http://localhost:8080/company/probate"

  constructor(private http : HttpClient){
  }

  listCompany(){
    this.http.get<Companies[]>(this.api);
  }

  //Register
  createComapny(company: Companies){
    this.http.post<Companies>(this.api, company);
  }
  
  updateCompany(id: number, company: Companies): Observable<Companies> {
    return this.http.put<Companies>(`${this.api}/${id}`, company);
  }

  deleteCompany(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }


}

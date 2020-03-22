import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../_models/company';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  getBanks() {
    throw new Error("Method not implemented.");
  }

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl + 'companies', httpOptions);
  }

  getCompany(id): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl + 'companies/' + id, httpOptions);
  }
}

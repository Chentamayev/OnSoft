import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bank } from '../_models/bank';


const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})
export class BankService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.baseUrl + 'banks', httpOptions);
  }

  getBank(id): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.baseUrl + 'banks/' + id, httpOptions);
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}s`);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}

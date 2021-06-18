import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet';

const baseUrl = 'http://localhost:3000/api/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${baseUrl}s`);
  }

  get(id: any): Observable<Pet> {
    return this.http.get<Pet>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<Pet> {
    return this.http.post<Pet>(baseUrl, data);
  }

  update(id: any, data: any): Observable<Pet> {
    return this.http.patch<Pet>(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<Pet> {
    return this.http.delete<Pet>(`${baseUrl}/${id}`);
  }

}

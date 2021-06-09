import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient) { }

  checkAnagram(text1: string, text2: string): Observable<any> {
    return this.http.post(baseUrl + 'anagram/', {
      text1,
      text2
    });
  }

  checkLargestNumber(array: any, element: number): Observable<any> {
    return this.http.post(baseUrl + 'largest-number', {
      array,
      element
    });
  }

  checkRepetitions(text: any): Observable<any> {
    return this.http.post(baseUrl + 'repetition-count', {
      text
    });
  }

}

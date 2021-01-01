import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Field, Fields, People, Person } from '../models/Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GisService {

  baseUrl = "https://localhost:5001/" ;
  // people = new People();

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl + 'api/people');
  }

  getFields(): Observable<Field[]> {
    return this.http.get<Field[]>(this.baseUrl + 'api/fields');
  }
}

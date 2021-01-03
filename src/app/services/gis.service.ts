import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Field, Fields, People, Person } from '../models/Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GisService {

  baseUrl: string = "https://localhost:5001/" ;     // back end api from .net core

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl + 'api/people');
  }
  getFields(): Observable<Field[]> {
    return this.http.get<Field[]>(this.baseUrl + 'api/fields');
  }
  getField(id): Observable<Field> {
    return this.http.get<Field>(this.baseUrl + 'api/fields'+ id);
  }

  // addPerson(person: Person): Observable<People> {
  //   return this.http.post<People>(this.baseUrl + 'api/people/', person);
  // }
  // updatePerson(person: Person): Observable<People> {
  //   return this.http.put<People>(this.baseUrl + 'api/people/' + person.id, person);
  // }
  // deletePerson(person: Person): Observable<People> {
  //   return this.http.delete<People>(this.baseUrl + "api/people" + person.id);
  // }

  addField(field: Field): Observable<Field> {
    return this.http.post<Field>(this.baseUrl + "api/fields/", field);
  }
  updateField(field: Field): Observable<Fields> {
    return this.http.put<Fields>(this.baseUrl + 'api/fields/'+ field.id, field);
  }
  deleteField(field: Field): Observable<Fields> {
    return this.http.delete<Fields>(this.baseUrl + 'api/fields/' + field.id);
  }
}

import { Component, OnInit } from '@angular/core';
import { People, Person } from '../models/Models';
import { GisService } from '../services/gis.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  // providers:[GisService]
})
export class PeopleComponent implements OnInit {

  selectedPerson: Person;
  people: Person[] = [];

  constructor(private gisService: GisService) { }

  ngOnInit(): void {
    this.getPeople();   // change detection için -> server ve client arasinda !!!!
  }

  getPeople() {
    this.gisService.getPeople().subscribe(people => {
        this.people = people
    });
  }

  onSelectedPerson(person: Person) {
    this.selectedPerson = person;
  }

  // deletePerson(person: Person) {
  //   this.gisService.deletePerson(person).subscribe(p => {
  //     this.people.splice(this.people.findIndex(p => p.id == person.id), 1);
  //   });
  // }
}

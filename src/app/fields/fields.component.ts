import { Component, OnInit } from '@angular/core';
import { Field, Fields, Person } from '../models/Models';
import { GisService } from '../services/gis.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
  // providers:[GisService]
})
export class FieldsComponent implements OnInit {

  selectedField: Field;
  fields: Field[] = [];

  constructor(private gisService: GisService) { }

  ngOnInit(): void {
    this.getFields();
  }
  getFields() {
    this.gisService.getFields().subscribe(fields => {
      this.fields = fields
    });
  }

  // addField(field: Field) {
  //   this.gisService.addField(field).subscribe(f => {
  //   })
  // }


}

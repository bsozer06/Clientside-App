import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Field, Fields } from '../models/Models';
import { GisService } from '../services/gis.service';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.css']
})
export class FieldFormComponent implements OnInit {

  // @Input() field: Field;
  // @Input() fields: Field[];
  selectedField: any;
  fields: Field[];

  constructor(private gisService: GisService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFields();
  }

  getFields(): void {
    this.gisService.getFields()
      .subscribe(f => {
        this.fields = f;
      })
  }

  addField(name:string, isActive:boolean, neighId:number, personId:number, cityId:number, createdTime:Date, wkt:string, age:number): void {
    this.gisService.addField({
      name,
      isActive,
      neighId,
      personId,
      cityId,
      createdTime,
      wkt,
      age
    } as Field).subscribe(field => this.fields.push(field));
  }

}

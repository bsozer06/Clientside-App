import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  True: boolean = JSON.parse("true");
  False: boolean = JSON.parse("false");

  constructor(private gisService: GisService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getFields();
  }

  getFields(): void {
    this.gisService.getFields()
      .subscribe(f => {
        this.fields = f;
      })
  }

  addField(id:number, name:string, isActive:boolean, neighId:number, personId:number, cityId:number, createdTime:Date, wkt:string, age:number): void {
    this.gisService.addField({
      id,
      name,
      isActive,
      neighId,
      personId,
      cityId,
      createdTime,
      wkt,
      age
    } as Field).subscribe(field => this.fields.push(field),
    error => {
      console.log(error);
      console.log(this.fields);
    });
  }

  // navigate to "/information/field" route by tihs method
  backToField(): any {
    this.router.navigate(['information/fields']);
  }
}

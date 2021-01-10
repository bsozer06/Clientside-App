import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Field, Fields } from '../models/Models';
import { GisService } from '../services/gis.service';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent implements OnInit {

  field: Field;    /// ngmodel ile yapilan degisiklikleri güncellenmesi
  fields: Field[] = [];
  // editForm: FormGroup;

  constructor(private gisService: GisService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getField();

  //   this.editForm = this.formBuilder.group({
  //     id: ['', Validators.required],
  //     name: ['', [
  //       Validators.required,
  //       Validators.pattern(
  //         /^[A-Za-z]{1,16}([ ]?[a-zA-Z]{0,16})([ ]?[a-zA-Z]{0,16})$/
  //       )
  //     ]],
  //     birsey: ['', [
  //       Validators.required,
  //       Validators.pattern(
  //         /^[A-Za-z]{1,16}([ ]?[a-zA-Z]{0,16})([ ]?[a-zA-Z]{0,16})$/
  //       )
  //     ]]
  //   });
  // }
  // onSubmit() {
  //   console.log(this.editForm.value)
  // }
  }


  getField():any {
    const id = +this.route.snapshot.paramMap.get('id');   // int'e cevirmek icin + konuldu
    this.gisService.getField(id)
      .subscribe(field => this.field = field);
  }

  updateField(id:number, name:string, isActive:boolean, neighId:number, personId:number, cityId:number, createdTime:Date,
    wkt:string, age:number) {

    const f = new Field(id, name,  neighId, personId, isActive, personId, cityId, createdTime, wkt, age);

    this.gisService.updateField(f)
      .subscribe(result => {
        this.fields.splice(this.fields.findIndex(t => t.id == f.id), 1, f)
    });
    this.field = null;
  }

  onEdit():void {
    console.log(this.field);
  }
}

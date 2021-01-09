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
  // editForm: FormGroup;

  constructor(private gisService: GisService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getField();
    // const id = +this.route.snapshot.paramMap.get('id');   // int'e cevirmek icin + konuldu
    // this.gisService.getField(id)
    //   .subscribe(field => this.field = field);

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
}

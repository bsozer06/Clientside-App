import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private gisService: GisService, private router: Router) { }

  ngOnInit(): void {
    this.getFields();
  }
  getFields() {
    this.gisService.getFields().subscribe(fields => {
      this.fields = fields
    });
  }

  deleteField(field: Field) {
    var result = confirm("Are you sure to delete?");
    if(result) {
      alert('Deleted');
      this.gisService.deleteField(field)
      .subscribe(f => {
        this.fields.splice(this.fields.findIndex(f => f.id == field.id), 1)
      });
    } else {
      alert("Not Deleted");
    }
  }

  addFieldNav(): any {
    this.router.navigate(['/fieldform']);
  }
  backToHome(): any {
    this.router.navigate(['/home']);
  }


}

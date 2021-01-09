import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { formatWithOptions } from 'util';
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
  id: number;

  constructor(private gisService: GisService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getFields();
  }
  getFields() {
    this.gisService.getFields().subscribe(fields => {
      this.fields = fields
    });
  }
  // getField(id) {
  //   this.gisService.getField(this.id)
  //     .subscribe(f => {
  //       console.log(f);
  //       this.selectedField = f;
  //     });
  // }

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

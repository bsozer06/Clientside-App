import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Field, Fields } from '../models/Models';
import { GisService } from '../services/gis.service';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent implements OnInit {
  @Input() field: Field;    /// ngmodel ile yapilan degisiklikleri güncellenmesi

  constructor(private gisService: GisService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getField();
  }

  getField(): void {
    const id = +this.route.snapshot.paramMap.get('id');   // int'e cevirmek icin + konuldu
    this.gisService.getField(id)
      .subscribe(f => this.field = f);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FieldFormComponent } from './field-form/field-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { InformationComponent } from './navbar/information/information.component';
import { MapComponent } from './navbar/map/map.component';
import { appRoutes } from './routes';
import { GisService } from './services/gis.service';
import { PageNotFoundComponentComponent } from './navbar/page-not-found-component/page-not-found-component.component';
import { PeopleComponent } from './people/people.component';
import { FieldsComponent } from './fields/fields.component';
import { FieldDetailComponent } from './field-detail/field-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldFormComponent,
    NavbarComponent,
    HomeComponent,
    InformationComponent,
    MapComponent,
    PageNotFoundComponentComponent,
    PeopleComponent,
    FieldsComponent,
    FieldDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,     //Http client calismasi icini bunu import et !!!!
    FormsModule,    // NgModel ile calismak icin (form lar icinde)
    ReactiveFormsModule,    // reactive style instead of template-driven
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [GisService],
  bootstrap: [AppComponent]
})
export class AppModule { }

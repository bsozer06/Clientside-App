import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
import { HttpClientModule } from '@angular/common/http';
import { FieldDetailComponent } from './field-detail/field-detail.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule,    // NgModel ile calismak icin
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [GisService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { MaincontentComponent } from './maincontent/maincontent.component';
import { GisService } from './services/gis.service';
import { PageNotFoundComponentComponent } from './navbar/page-not-found-component/page-not-found-component.component';
import { PeopleComponent } from './people/people.component';
import { FieldsComponent } from './fields/fields.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FieldFormComponent,
    NavbarComponent,
    HomeComponent,
    InformationComponent,
    MapComponent,
    MaincontentComponent,
    PageNotFoundComponentComponent,
    PeopleComponent,
    FieldsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,     //Http client calismasi icini bunu import et !!!!
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GisService],
  bootstrap: [AppComponent]
})
export class AppModule { }

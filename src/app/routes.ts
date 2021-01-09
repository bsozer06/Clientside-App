import { Routes } from "@angular/router";
import { FieldDetailComponent } from "./field-detail/field-detail.component";
import { FieldFormComponent } from "./field-form/field-form.component";
import { FieldsComponent } from "./fields/fields.component";
import { HomeComponent } from "./navbar/home/home.component";
import { InformationComponent } from "./navbar/information/information.component";
import { MapComponent } from "./navbar/map/map.component";
import { PageNotFoundComponentComponent } from "./navbar/page-not-found-component/page-not-found-component.component";
import { PeopleComponent } from "./people/people.component";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "information", component: InformationComponent },
  { path: "information/people", component: PeopleComponent },
  {
    path: "information/fields", component: FieldsComponent
    // ,children: [
      // { path: ":id", component: ""},
    //   { path: ":id/edit", component: FieldFormComponent }
    // ]
  },
  { path: "fieldform", component: FieldFormComponent },     // add field values by form
  { path: "fielddetail", component: FieldDetailComponent },
  { path: "map", component: MapComponent },
  { path: "**", component: PageNotFoundComponentComponent }   // Wildcard route for a 404 page
];
